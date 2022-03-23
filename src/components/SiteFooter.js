import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SiteFooter extends Component {
   render() {
     return(
       <div id="site-footer" className="fixed-bottom">
        <Container className="mini-dashboard" fluid>
           <Row>
             <Col xs={6} style={{borderRight: "2px solid #FAB20B"}}>
               <p className="small yellow-text text-center"><strong>$1452</strong><br></br>
               AVAILABLE
               </p>
             </Col>
             <Col xs={6}>
             <p className="small yellow-text text-center"><strong>$548</strong><br></br>
               TOTAL SPENT
               </p>
             </Col>
           </Row>
        </Container>   
         <Container className="custom-footer" fluid>
            <p class="footer-links text-center">PRIVACY POLICY | TERMS</p>
         </Container>
       </div>
     );
   }
}

export default SiteFooter;