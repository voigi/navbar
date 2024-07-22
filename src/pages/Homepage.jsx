
import React, { useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { UserContext } from '../context/UserContext';

import {ToastContainer , toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Homepage = () => {

 


  const { user } = useContext(UserContext);
  const { status } = useContext(UserContext);
  const { prevStatus } = useContext(UserContext);
  const { setPrevStatus } = useContext(UserContext);


useEffect(() => {
  if (status === 'connected' && user !== undefined){
    if(prevStatus !== 'connected') {   

      toast.success('Vous êtes connecté');

    }
    setPrevStatus('connected');
  }
  if (status === 'deconnected' && user !== undefined){
    if(prevStatus !== 'deconnected') {   

      toast.error('Vous êtes déconnecté');

    }
    setPrevStatus('deconnected');
  }
}, [status, user])


    


  return (
  
    <>
      <Navbar />
      <div className="container" style={{margin:'0'}}>
        <div >Homepage</div>
            
       </div>
          <ToastContainer
             position="bottom-right"
             theme="colored"


/> 

      </>
   
  )
}

export default Homepage