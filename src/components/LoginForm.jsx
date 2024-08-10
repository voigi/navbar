import React, { useContext, useState, useRef } from "react";
import DataTable from "../components/DataTable";
import { users } from "../model/Mock";
import { admins } from "../model/AdminMock";
import { UserContext } from "../context/UserContext";
import { AdminContext } from "../context/AdminContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import showPwdImg from "../assets/showPwdImg.svg";
import hidePwdImg from "../assets/hidePwdImg.svg";
import { Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/login.css";




const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const { setAdmin } = useContext(AdminContext);
  const { setStatus } = useContext(UserContext);
  const { status } = useContext(UserContext);
  const navi = useNavigate();
  const [validated, setValidated] = useState(false);
  const [clicked, setClicked] = useState(true);
  const [isShaking, setIsShaking] = useState(false);
  const [loginError, setLoginError] = useState('');
 

 
 


  
  const handleSubmit = (e) => {





    e.preventDefault();

    const user = users.find(
      (user) => user.username === e.target.username.value
    );
   
    if (user) {
      setUser({
        username: user.username,
        email: users.find((user) => user.username === e.target.username.value)
          .email,
        avatar: users.find((user) => user.username === e.target.username.value)
          .avatar,
        tournoi: users.find((user) => user.username === e.target.username.value)
          .tournoi,
        birthdate: users.find(
          (user) => user.username === e.target.username.value
        ).birthdate,
        registeredAt: users.find(
          (user) => user.username === e.target.username.value
        ).registeredAt,
        snookerFavoriteGames: users.find(
          (user) => user.username === e.target.username.value
        ).snookerFavoriteGames,
        team: users.find((user) => user.username === e.target.username.value)
          .team,
      });

      console.log(setUser);

      


  

      for (let i = 0; i < users.length; i++) {
        
        
        if (
          users[i].username === e.target.username.value &&
          users[i].password === e.target.pass.value
        ) {
          setStatus("connected");
          console.log("Connexion réussie");
          navi("/");

        }
        
        if(users[i].username === e.target.username.value && users[i].password !== e.target.pass.value){
         // setLoginError("identifiants incorrects");
          setStatus("disconnected");
          navi("/login");
        }   
  
      }

    }
   


    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setIsShaking(true);
      
    }

    setValidated(true);

    const adminuser = admins.find(
      (admin) => admin.username === e.target.username.value
    );

    if (adminuser) {
      setAdmin({
        username: adminuser.username,
        email: admins.find(
          (admin) => admin.username === e.target.username.value
        ).email,
        password: admins.find(
          (admin) => admin.username === e.target.username.value
        ).password,
      });

      for (let i = 0; i < admins.length; i++) {
        if (
          admins[i].username === e.target.username.value &&
          admins[i].password === e.target.pass.value
        ) {
          setStatus("connected");
          console.log("Connexion réussie");
          navi("/");
        }  if (
          e.target.username.value ==='' &&
          e.target.pass.value === ''||
          users[i].username !== e.target.username.value &&
          users[i].password !== e.target.pass.value
         ) {
          setIsShaking(true);
          console.log("Connexion échouée");
         }
      }
    }
    const adminform = e.currentTarget;
    if (adminform.checkValidity() === false) {
     
      e.preventDefault();
      e.stopPropagation(); 
      setIsShaking(true);
    }

    setValidated(true);
  };



  return (
    <>
      {status !== "connected" && (
        <>
          <h2 className="text-center">Page de connexion</h2>
          <>
            <div  
            className="container mt-5 mb-5"
              
            
              style={{
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {/* {loginError && (
  <div className="error">
    {loginError} 
  </div>
)} */}
             
              <Form   className={` container mb-5 mt-5 ${isShaking ? " shake" : "coucou"}`}   noValidate validated={validated} onSubmit={handleSubmit}>
                <div className="container">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                    pattern="[#?!@$_ .%^&*-,a-z,A-Z,0-9]{3,19}"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                  Entrez un nom d'utilisateur valide.
                  </Form.Control.Feedback>
                </div>

                <div className="container" style={{
                      position: "relative",
                    }}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                   
                    
                    type={clicked ? "password" : "text"}
                    placeholder="Mot de Passe"
                    id="pass"
                    pattern='[#?!@$ %^&*-,a-z,A-Z,0-9]{3,16}'
                    required
                  />
                <Form.Control.Feedback type="invalid">
                    Entrez un mot de passe valide.
                  </Form.Control.Feedback>
                 
                  <Image
                    style={{position: "absolute" , top: "73%", right: "1vw", transform: "translateY(-50%)" ,
                    display: validated
                      ? document.getElementById("pass").classList.contains(
                          "form-control"
                        )
                        ? "none"
                        : "block"
                      : "block",
                  
                  }}
                  alt="eye"
               
                   
                    onClick={() => {
                      setClicked(!clicked);
                    }}
                    src={clicked ? hidePwdImg : showPwdImg}
                    width="30px"
                    height="30px"
                  />
                
                </div>
                 

                <div className="container">
                  <Button className="mt-3" variant="primary" type="submit">
                    Envoyer
                  </Button>
                </div>
              </Form>
            </div>
            <DataTable />
          </>
        </>
      )}
    
    </>
  );
};

export default LoginForm;
