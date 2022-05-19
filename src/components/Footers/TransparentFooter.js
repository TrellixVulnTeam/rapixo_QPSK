/*eslint-disable*/
import React from "react";

// reactstrap components
import { Col, Container } from "reactstrap";

function TransparentFooter() {
  return (
    <footer className="footer">
      <Container>
    
     <Col md="12" style={{textAlign:"center"}}>
     <div id="copyright"  >
          © {new Date().getFullYear()}, Designed by{" "}
          <a
            href="https://degen.rocks/"
            target="_blank"
          >
            Degen Rocks
          </a>
          . 
        </div></Col>
      </Container>
    </footer>
  );
}

export default TransparentFooter;
