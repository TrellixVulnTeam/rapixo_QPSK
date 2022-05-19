/*eslint-disable*/
import React from "react";
import { NavLink } from "react-router-dom";

// reactstrap components
import { Container, NavItem, Row, UncontrolledTooltip } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black" style={{borderTop:"2px solid white", background:"#0b0e27"}}>
      <Container style={{justifyContent:"center"}}>
     
               <Row style={{justifyContent:"center"}}>
                <div className="copyright mt-2 ml-4" id="copyright">
          All Rights Reserved © {new Date().getFullYear()}, Developed by{" "}
          <a
            href="https://degen.rocks/"
            target="_blank"
          > <strong>Degen Rocks</strong>
          </a>
          . 
        </div>
               </Row>
              
      </Container>
    </footer>
  );
}

export default DarkFooter;
