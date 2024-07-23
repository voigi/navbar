import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EventModal = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter un Evenement</Modal.Title>
      </Modal.Header>

      <Modal.Body>
    <Form.Label htmlFor="title">Titre de l'evenement:</Form.Label>
    <Form.Control
      type="text"
      id="title"
     
    />
    <Form.Label htmlFor="date">Date de l'evenement: </Form.Label>
    <Form.Control
      type="date"
      id="inputPassword5"
     
    />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Fermer</Button>
        <Button variant="primary">Enregistrer</Button>
      </Modal.Footer>
    </Modal>
  </>

  )
}

export default EventModal