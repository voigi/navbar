import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const NoMatch = () => {
    
const navi = useNavigate();

  const backHome = () => {
    navi('/');
  };

  return (
    <Container className="mt-5">

 
         <div className='card bg-light p-4 shadow'>
   
   
               <Row  >
         
         <Col className='d-flex justify-content-center'>
   
         <div style={{ padding: 20 }}>
      <h2>404: Page Not Found</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
    </div>
          
         </Col>

       </Row>
   
       
   
   
    
         </div>
          <div className="mt-3">
   
   
   
           <bouton className="btn btn-primary" onClick={() => backHome() }>Retour</bouton>
          </div>
     </Container>
  );
}

export default NoMatch