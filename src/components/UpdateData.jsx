import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const UpdateData = () => {
 const navi = useNavigate();


  const handleClick=()=> {
    navi("/tournoi");
  }  
 
  return (
    <Button variant="primary" onClick={handleClick}>
    Mettre à jour les données
  </Button>
  )
}

export default UpdateData