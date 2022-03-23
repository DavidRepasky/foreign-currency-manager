import React, { Component } from 'react';
import CustomNav from './NavigationHeader';
import SiteFooter from './SiteFooter.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Dashboard extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return(
        <div id="dashboard">
           <Container>
             <div className="gutters">  
              <Row>
                <Col xs={12}>
                    <h1 className="blue text-center page-header">BUDGET DASHBOARD</h1>
                    <div className="mx-auto mt-1 mb-4">
                    <h2 className="currency text-center jumbo">$1,452</h2>
                    <h4 className="claret-text open-sans-condensed text-center big fw-800"><strong>AVAILABLE</strong></h4>
                    </div>
                </Col>
              </Row> 
              <Row>
                <Col xs={12}>
                    <div className="mx-auto mt-3 mb-3">
                    <h2 className="currency text-center big">$548</h2>
                    <h4 className="claret-text text-center open-sans-condensed enhanced fw-800"><strong>TOTAL SPENT</strong></h4>
                    </div>
                </Col>
                </Row>
                <Row>
                <Col xs={12}>
                <div className="mx-auto mt-3 mb-3">
                    <h2 className="currency text-center big text-success">27.4%</h2>
                    <h4 className="claret-text text-center open-sans-condensed enhanced fw-800"><strong>OF BUDGET SPENT</strong></h4>
                    </div>
                </Col>   
              </Row>
              </div>
           </Container>           
        </div>
      ); 
   }
}

export default Dashboard;