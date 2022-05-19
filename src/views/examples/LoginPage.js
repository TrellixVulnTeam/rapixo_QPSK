import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import keccak256 from 'keccak256'
import {MerkleTree} from 'merkletreejs'
import { ethers } from "ethers";
import abi from "./abi.json";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";

 
function LoginPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  const [price, setPrice] = React.useState(0);
  const [verfied, setVerified] = React.useState(false);


  const getProof = (address) => {
  
    const leaves = [
      "0xb4e912C0ED3B356af88Ee2587250875d4676Ca02",
      "0x138e12e81cc64a667752cD70b4C6E1681bF91378"
  ].map((v) => keccak256(v));
    //console.log(leaves);
    const tree = new MerkleTree(leaves, keccak256, { sort: true });
    // console.log(tree);
    const leaf = keccak256(address);
    // console.log(leaf);
    const root = tree.getHexRoot()
    console.log(root);
    const proof = tree.getHexProof(leaf);
    console.log(proof);
    return proof;
  };

  const connectWallet = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const network = await provider.getNetwork();
    const chainId = network.chainId;
    console.log(chainId);
    console.log("CONNECTED");
    if (chainId !== 4) {
      window.alert("please switch to rinkeby")
    }
  };

  const write = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const contract_address = "0x506523d307B0FeCb19528814569920Dc4ec24421";
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const accounts = await provider.listAccounts();
        const add = accounts[0];
        const signer = provider.getSigner();
        const proof = getProof(add);
        const options = { value: ethers.utils.parseEther("0.077").mul(counter)};
        console.log(options)
        const contract = new ethers.Contract(contract_address, abi, signer);
        const res = await contract.OGmint(counter, proof, options);
        console.log(proof);
        console.log(res);
        if (res.hash !== undefined) {
          window.alert("Successfully Minted");
        }
      } catch (error) {
        if (
          error.message.includes("execution reverted: Invalid merkle proof")
        ) {
          window.alert("Invalid proof");
          return;
        } else if (
          error.message.includes("User denied transaction signature")
        ) {
          window.alert("User denied transaction signature");
          return;
        } else if (
          error.message.includes(
            "insufficient funds for intrinsic transaction cost "
          )
        ) {
          window.alert("Insufficient funds for intrinsic transaction cost");
          return;
        }

        window.alert("The Tx Failed");

        console.log(error);
      }
    }
  };


  const onChange=(value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  }
  const handleClick=()=> {
        if(counter<3)
        {
          setCounter(counter+1)
        }
        if(counter==0)
        {
          setPrice(0.077)
        }
        if(counter==1)
        {
          setPrice(0.154)
        }
        if(counter==2)
        {
          setPrice(0.231)
        }
        console.log(counter)
  }
  const handleClick2=()=> {
    if(counter>0)
    {
      setCounter(counter-1)
    }
    if(counter==2)
    {
      setPrice(0.077)
    }
    if(counter==3)
    {
      setPrice(0.154)
    }
    if(counter==1)
    {
      setPrice(0)
    }
    console.log(counter)

}
const handleClick3=()=> {
 
    setCounter(3)
    setPrice(0.231)

  
}
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
      <div className="page-header"         style={{
                      background:
                        "#0b0d26", 
                    }}
 >
        <div
          className="page-header-image"
          style={{backgroundImage: "url(" + require("assets/bg1.png").default + ")"}}
        ></div>
        <div id="stars"></div>
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div id="stars4"></div>
        <div className="content" >
        
          <Container  style={{backgroundImage: "url(" + require("assets/bgnew.png").default + ")"}}>
          <div className="logo-container">
                     <img
                        alt="..."
                        src={require("assets/logo.png").default}
                      ></img>
                      
                    </div> 
            <Col className="ml-auto mr-auto" md="12">
            <h2>
                        OG MINTING
                      </h2>
                      <h4><b>NOTE :</b> OG addresses can mint upto 3 NFTs</h4>
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">

                  </CardHeader>
                  <CardBody>
                    <h5>{counter}</h5>   <h5 className="mb-2">
                        Total <br></br> {price} ETH
                      </h5>
                    <div className="pull-left">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={handleClick2}
                                                                  size="lg"
                    >
-                    </Button>
                    </div>
                    <div className="pull-right">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                                     onClick={handleClick}
                      size="lg"
                    >
+                    </Button>
                    </div>
                    <Button
                      block
                      className="btn-round mt-2"
                      color="info"
                                     onClick={handleClick3}
                      size="lg"
                    >GET MAX                   </Button>
                  </CardBody>
                
                  <CardFooter className="text-center">
                  <ReCAPTCHA
    sitekey="6LcBgPMfAAAAAE40PKZS6_NNmrAIEpBoBFgBiD9I"
    onChange={onChange}
  />,
  
  <Button disabled={!verfied}
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={connectWallet}
                      size="lg"
                    >
CONNECT WALLET                    </Button>
                    <Button disabled={!verfied}
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={write}
                      size="lg"
                    >
MINT                    </Button>
                   
                  </CardFooter>
                </Form>
              </Card>
            </Col>
            
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default LoginPage;
