import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const Connect = () => {
    
const navi = useNavigate();

  const backLogin = () => {
    navi('/login');
  };

  return (
    <Container className="mt-5">

 
         <div className='card bg-light p-4 shadow'>
   
   
               <Row  >
         
         <Col className='d-flex justify-content-center'>
   
         <div style={{ padding: 20 }}>
      <h2>Connecté?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      <div className="mt-3">
   
   
   
           <bouton className="btn btn-primary" onClick={() => backLogin() }>Se connecter</bouton>
          </div>
    </div>
          
         </Col>

       </Row>
   
       
   
   
    
         </div>
      
     </Container>
  );
}

export default Connect;