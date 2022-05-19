import React from "react";
import cyber from "assets/cyber.mp4";
import main from "assets/sun.mp4"
// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip,
  Collapse,
  Modal 
} from "reactstrap";
import FAQS from 'react-faqs-component';
import { HashLink as Link } from 'react-router-hash-link';

// core components

import Collapses from "views/Collapses";
import { useHistory } from "react-router-dom";

import DarkFooter from "components/Footers/DarkFooter";

const data = {
    title: "FAQ (How it works)",
    rows: [
        {
            title: "Lorem ipsum dolor sit amet,",
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
        },
        {
            title: "Nunc maximus, magna at ultricies elementum",
            content:
                "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
        },
        {
            title: "Curabitur laoreet, mauris vel blandit fringilla",
            content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
        },
        {
            title: "What is the package version",
            content: <p>current version is 1.2.1</p>,
        },
    ],
};


function LandingPage() {
  let history = useHistory();

  function handleClick() {
    history.push("/whitelist");
  }
  function handleClick2() {
    history.push("/og");
  }
  const [modalLive, setModalLive] = React.useState(false);
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  return (
    <>
    
    {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              target="_blank"
              id="navbar-brand"
            >
   <img
                      alt="..."
                      className="img-fluid"
                      style={{width:"5rem"}}
                      src={require("assets/logo.png").default}
                    ></img>            </NavbarBrand>
           
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar >
              <NavItem>
              <Link to="landing-page#tech" className="nav-link text-white2">
TECHNOLOGY                </Link>
              </NavItem>
              <NavItem>
                <Link to="landing-page#roadmap" className="nav-link text-white2">
ROADMAP                </Link>
              </NavItem>
              <NavItem>
              <Link to="landing-page#teams" className="nav-link text-white2">
TEAM                </Link>
              </NavItem>
              <NavItem>
              <Link to="landing-page#faq" className="nav-link text-white2">
FAQ                </Link>
              </NavItem>
              <NavItem>
              <Link  className="nav-link text-white" 
                                     onClick={handleClick2}
                                     >
OG-MINT                 </Link>
              </NavItem>
              <NavItem>
              <Link  className="nav-link text-white" 
                                     onClick={handleClick}
                                     >
WHITELIST-MINT                 </Link>
            </NavItem>
              <NavItem>
              <Link  className="nav-link" 
                                     onClick={() => setModalLive(true)}
                                     >
MARKETPLACE              </Link>
            </NavItem>
              
              <NavItem>
                <NavLink
                  href="https://twitter.com/rapixorecords"
                  target="_blank"
                  id="facebook-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none ml-2">Twitter</p>
                </NavLink>
            
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://instagram.com/rapixorecords"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram mr-2"></i>
                  <p className="d-lg-none d-xl-none ml-2">Instagram</p>
                </NavLink>
          
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://discord.com/invite/rapixo"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-discord mr-2"></i>
                  <p className="d-lg-none d-xl-none ml-2">Discord</p>
                </NavLink>
     
              </NavItem>
              {/*<NavItem>
                <Button
                  className="nav-link btn-neutral"
                  color="info"
                  href=""
                  id="upgrade-to-pro"
                  target="_blank"
                  onClick={() => setModalLive(true)}
                >
                  <p>Market Place</p>
                </Button>
            </NavItem>*/}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>    
      <Modal toggle={() => setModalLive(false)} isOpen={modalLive}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
          </h5>
          <button
            aria-label="Close"
            className="close"
            type="button"
            onClick={() => setModalLive(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>Coming Soon!</p>
        </div>
        <div className="modal-footer">
          <Button className="nav-link btn-neutral"
            color="secondary"
            type="button"
            onClick={() => setModalLive(false)}
          >
            Close
          </Button>
       
        </div>
      </Modal>  
      <div className="wrapper" style={{overflowX:"hidden", maxWidth:"100vw", minWidth:"100vw", backgroundColor:"#0b0e27"}}>
      <video muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop  width="100%"  playsinline="" oncanplay="this.play()" onloadmetadata="this.muted=true" ><source src={main} type="video/mp4"/></video>
                 <div className="section section-about-us" style={{overflowX:"hidden", maxWidth:"100vw", minWidth:"100vw",backgroundColor:"black", backgroundColor:"#0b0e27", minHeight:"40rem", 
          
                      backgroundImage:
                        "url(" + require("assets/bg1.png").default + ")", backgroundSize : "100vw", backgroundRepeat : "no-repeat", backgroundColor : "#0b0e27", backgroundPosition : "center",
                    }} 
          >
            <Row id="about">
              <Col className="ml-auto mr-auto text-center text-white" md="8">
                <h2 className="title">What is Rapixo?</h2>
                <h5 className="description text-white">
                Rapixo Genesis is a collection of 777 3D 8K NFTs inspired by mainstream Rap Culture,  Rapixo acts as a decentralized metaverse record label,
with innovative 3D Volumetric Scanning Technology. Holders of Rapixo NFTs run the record label through a DAO voting system and benefit from the passive
income generated by Music NFT sales and streaming revenue along with a ton of other perks.
                </h5>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center mt-4 pt-4" md="8">
                <h2 className="title" style={{color:"white"}}>Art </h2>
                <h5 className="description text-white">
                Rapixo NFTs are highly detailed with an 8K resolution, inspired by mainstream Rap and Hip-Hop culture.
                <br></br>
                 They're solely designed by our artist Aryan Dhall, who's only 16 years old as of now. Aryan has only recently started his journey with 3D art and Rapixo NFTs allow its holders to invest into an Artist early on.
                 <br></br>
Rapixo NFTs will have over 200 highly-detailed traits.
                <br id="tech" ></br>
                Shortly after reveal all Rapixo NFTs will also get their dedicated AR Filters allowing holders to create content and music while using the brand identity of their NFT.<br></br> Holders will also have IP rights for all of their NFTs.
                </h5>
              </Col>
             
            </Row>
        </div>
        <div className="section section-team text-center text-white" style={{textAlign:"center", justifyContent:"center", backgroundColor:"#0b0e27", backgroundImage:
                        "url(" + require("assets/planet.png").default + ")" }}>
          <Container>
            <h2 className="title mb-4 pb-4">Technology</h2>
            <div className="team">
              <Row>
                <Col md="6">
                <h5 className="description text-white">
                We have partnered up with iiinuitech Shanghai, China and their CEO is our Technology Officer, through them we have access to proprietory 3D Photorealistic Volumetric Scanning Technology.
                <br></br>
                 Through this technology, we will be able to create 3D Volumetric (The shape and size of the model will be the same) and Photorealistic (The texture and complexsion of the model will be the same) models to be used in a Life-like metaverse or a propiretory AR app.
                <br></br>
Artists that are onboarded on Rapixo will be scanned this way and their Music NFTs will be sold with a live AR performance as well, this technology will allow music fans too see their favorite artists perform at the comfort of the own time&place.


                </h5>
                </Col>
                <Col md="6" >
                <video muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop _ngcontent-csi-c107="" width="100%"  playsinline="" oncanplay="this.play()" onloadmetadata="this.muted=true" class="ng-tns-c107-0"><source _ngcontent-csi-c107="" src={cyber} type="video/mp4" class="ng-tns-c107-0"/></video>

                </Col>
              </Row>

            </div>
          </Container>
        </div>
        <div id="roadmap" className="section section-contact-us text-center text-white" style={{textAlign:"center", justifyContent:"center", backgroundColor:"#0b0e27", maxWidth:"100vw", minWidth:"100vw" }}  >

<Row style={{
            backgroundImage:
              "url(" + require("assets/below-back.webp").default + ")"
          }} className="background-fix-r">
<Row style={{
            backgroundImage:
              "url(" + require("assets/left.png").default + ")"
          }} className="background-fix">
 
  <Col md="7" style={{justifyContent:"center", padding:"4.5rem", paddingTop:"0rem"}} >
  <h2 className="title mb-4 pb-4 ">Roadmap</h2>
  <Row className="pink-box text-white">
  <h2 className="title mb-2" style={{textAlign:"center",     justifyContent: "center"
}}>Phase I (Immediately Post Mint)  🌇</h2>

      <h5 className="description text-white">
      1) A DAO community fund will be created with 55% of all of the funds generated, this treasury will be used to fund Artist Signups and Technological Developments.
<br></br>
<br></br>

2) 35% of all secondary royalties generated will be sent back to the treasury, the other 65% will be used to pay the team.
<br></br>
<br></br>

3) Phase I will end with the formal onboarding of an Artist to Rapixo Records through community vote.
<br></br>
<br></br>

4) Post-Reveal all Rapixo HODLers holding for more than 2 weeks will be able to claim one NFT Display per NFT.
      </h5>
  </Row>
  <Row style={{border: "3px solid #067c9e", textAlign:"center"}} className="pink-box mt-4">
    <h2 className="title mb-2" style={{textAlign:"center", justifyContent: "center"}}>Phase II (Execution) 🌇
</h2>
      <h5 className="description text-white">
      1) Formal onboarding of an Artist to Rapixo Records through community vote. <br></br>
<br></br>
2) Concert in the Metaverse, through AR Volumetric Tech by Iiintuitech Shanghai, China. <br></br>
<br></br>
3) An LA Studio will be setup enabling Artists to enter the metaverse with thier photorealistic 3D avatars. <br></br>
<br></br>
4) Collaborations with pre-existing record labels will also go underway with an aim to sponsor a Real-Life Rapixo concert
      </h5>
    </Row>
    <Row style={{border: "3px solid #067c9e", textAlign:"center"}} className="pink-box mt-4">
    <h2 className="title mb-2" style={{textAlign:"center", justifyContent: "center"}}>Phase III (The Future of Rapixo) 🌇
</h2>
      <h5 className="description text-white" id="teams">
      Our team after the mint will comprise of 5,555 more members as our holders join the voting system! <br></br>
<br></br>As such, the future of the project beyond Phase II will be democratically decided by the team and in the ever changing Web 3.0 world we don't want to speculate into oblivion and hope that together with our holder we'll be able to turn Rapixo into a global powerhouse of music and fun!
      </h5>
    </Row>
  </Col>
 
</Row>
</Row>

</div>
        <div className="section section-team text-center text-white" style={{textAlign:"center", justifyContent:"center", backgroundColor:"#0b0e27"}} >
          <Container>
            <h2 className="title mb-4 pb-4">Team</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/sid.jpg").default}
                    ></img>
                    <h4 className="title">Sidd
</h4>
                    <p className="category text-info">FOUNDER</p>

                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/kidslatty"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player mt-2">
                    <img
                      alt="..."
                      className="mt-2 mb-4 img-fluid img-raised"
                      src={require("assets/L.png").default}
                    ></img>
                    <h4 className="title"><strong>Degen Rocks</strong>
</h4>
                    <p className="category text-info">DEVELOPER
</p>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/degen_rocks"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://www.instagram.com/degen.rocks/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://degen.rocks/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-globe fab"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/kevin.jpg").default}
                    ></img>
                    <h4 className="title">Kevin Richardson
</h4>
                    <p className="category text-info">Volumetric Tech Manager
</p>

                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/KevinR_SH"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://www.linkedin.com/in/KevinRSH"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://iiintuitech.com/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-globe fab"></i>
                    </Button>
                  </div>
                </Col>
                
              </Row>
              <Row style={{textAlign:"center", justifyContent:"center", backgroundColor:"#0b0e27"}} className="mt-4 text-white" >
              <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/aryan.jpg").default}
                    ></img>
                    <h4 className="title">Aryan Dhall
</h4>
                    <p className="category text-info">ARTIST
</p>
     

                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://www.instagram.com/aryanatom/"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-instagram"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/atomwolf5"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/ell.jpg").default}
                    ></img>
                    <h4 className="title">Elliot Anderson
</h4>
                    <p className="category text-info">CREATIVE HEAD
</p>

                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/elliotWAGMI"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                  
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid img-raised"
                      src={require("assets/luh.jpg").default}
                    ></img>
                    <h4 className="title">LuhGang
</h4>
                    <p className="category text-info">PROJECT ADVISOR
</p>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/LuhGangWrld"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon"
                      color="info"
                      href="https://twitter.com/ICONALPHA7"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fab fa-linkedin"></i>
                    </Button>
                  </div>
                </Col>
              </Row>
              
            </div>
            
          </Container>
         
        </div>
        <div id="faq" className="section section-team text-center text-white" style={{textAlign:"center", justifyContent:"center", backgroundColor:"#0b0e27",   fontFamily:"chinese rocks"
}}>
          <Container style={{justifyContent:"center", textAlign:"center"}}>
          <h2 className="title mb-4 pb-4" style={{textAlign:"center", justifyContent: "center"}}>FAQ</h2>

           <Row style={{textAlign:"center", justifyContent: "center"}}>
           <Col md="7">
            <Collapses>
            </Collapses>
            </Col>
           </Row>
          </Container>
        </div>
        <DarkFooter></DarkFooter>

      </div>
    </>
  );
}

export default LandingPage;
