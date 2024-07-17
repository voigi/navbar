// Suggested code may be subject to a license. Learn more: ~LicenseLog:3462722702.
import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserContext';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Bouton from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import ball from '../assets/ball.png';

const Profil = () => {
  const { user } = useContext(UserContext);
  const { status } = useContext(UserContext);

  console.log(user);
  console.log(user.tournoi);
  console.log(user.snookerFavoriteGames);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const navi = useNavigate();

  const backHome = () => {
    navi('/');
  };
  const returnlogin = () => {
    navi('/login');
  };

  useEffect(() => {
    if (user.avatar === undefined) {
      returnlogin();
    }
  }, [user]);

  console.log(user.avatar);

  return (





      <><Container className="mt-5">
      <h3 className="text-center">Mon Profil</h3>

      <div className='card bg-light p-4 shadow border rounded position-absolute  start-50 translate-middle' style={{ width: '70rem', top: '45%' }}>


        <Row>

          <Col className='d-flex justify-content-center'>

            <Image src={user.avatar} alt="Avatar" roundedCircle width="200" className='shadow' />

          </Col>
          <Row>
            <Col className="d-flex justify-content-center">
              <h2>{user.username}</h2>

            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              <p>{user.email}</p>
            </Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center">
              {user.tournoi === true && <Bouton onClick={() => navi('/tournoi')}>Acceder au tournoi</Bouton>}
            </Col>

          </Row>



        </Row>

        <Row className="mt-3">
          <Col>



            <Stack direction="horizontal">
              <a href="https://www.linkedin.com/in/johndoe/" className="me-2">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/johndoe" className="me-2">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:johndoe@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </Stack>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h3 className="ms-2">Informations</h3>
            <ul className="list-unstyled">
              <li><img src={ball} alt="ball" width="25" height="25" />Tournoi: {user && status === 'connected' && user.tournoi === true ? <Badge bg="success">Oui</Badge> : <Badge bg="danger">Non</Badge>}</li>
              <li><img src={ball} alt="ball" width="25" height="25" /><span>Billard Favoris: </span>

                {user && status === 'connected' &&
                  user.snookerFavoriteGames.map((game, index) => (
                    <Badge className='me-1' bg="secondary" key={index}>{game}</Badge>
                  ))}

              </li>

              <li><img src={ball} alt="ball" width="25" height="25" /><span>Date de naissance: </span>{user.birthdate.toLocaleDateString('fr', options)}</li>


              <li><img src={ball} alt="ball" width="25" height="25" /><span>Date d'inscription: </span>{user.registeredAt.toLocaleDateString('fr', options)}</li>
              {user.tournoi === true && <li><img src={ball} alt="ball" width="25" height="25" /><span>team: {user.team}</span></li>}
              <li><img src={ball} alt="ball" width="25" height="25" />Node.js</li>
            </ul>
          </Col>
        </Row>

      </div>


    </Container>
      <div className="mt-3 position-absolute" style={{ top: '77%', left: '20.9%' }}>
        <Bouton className="btn btn-primary" onClick={() => backHome()}>Retour</Bouton>
      </div>
      
      </>

   

  );
}

export default Profil;

