import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Event from "../donnees/events.json";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const EventModal = () => {


  const [validated, setValidated] = useState(false);



  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    Debutdate: "",
    Debuttime: "",
    Enddate: "",
    Endtime: "",
    description: "",
    backgroundColor: "",
  });

  const navi = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSave = (event) => {
    toast.success('Evenement crée avec succès', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    
    const newEvent = {
      title: formData.title,
      start: `${formData.Debutdate}T${formData.Debuttime}:00`,
      end: `${formData.Enddate}T${formData.Endtime}:00`,
      description: formData.description,
      backgroundColor: formData.backgroundColor,
    };
    Event.push(newEvent);

    // Récupérer les événements existants du localStorage
    const existingEvents =
      JSON.parse(localStorage.getItem("updateEvents")) || [];

    // Ajouter le nouvel événement à la liste existante
    existingEvents.push(newEvent);

    // Sauvegarder l'ensemble mis à jour dans le localStorage
    localStorage.setItem("updateEvents", JSON.stringify(existingEvents));

   

 

  


    //  afficher les modifications sans recharger la page
    navi("/tournoi");

    setFormData({
      title: "",
      Debutdate: "",
      Debuttime: "",
      Enddate: "",
      Endtime: "",
      description: "",
      backgroundColor: "",
    });
    handleClose();
  };
 

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un Evenement
      </Button>

      <Modal show={show} onHide={handleClose} backdrop="static" aria-labelledby="contained-modal-title-vcenter" centered animation> 
        <Modal.Header closeButton >
          <Modal.Title className="ms-auto" >Ajouter un Evenement</Modal.Title>
        </Modal.Header>

        <Modal.Body>

             <Form noValidate validated={validated}>
          
            <Form.Label htmlFor="title">Titre de l'evenement:</Form.Label>
            <Form.Control
              type="text"
              id="title"
              value={formData.title}
              onChange={handleInputChange}
              required
            />
            <Form.Label>Description de l'évenement :</Form.Label>
            <Form.Control
              id="description" as="textarea" 
              rows={3} 
              value={formData.description}
              onChange={handleInputChange}
              
            />
            <Form.Label htmlFor="Debutdate">Date de  début de l'evenement:</Form.Label>
            <Form.Control
              type="date"
              id="Debutdate"
              value={formData.Debutdate}
              onChange={handleInputChange}
              required
            />
            <Form.Label htmlFor="Debuttime">Heure de début de l'événement:</Form.Label>
            <Form.Control
              type="time"
              id="Debuttime"
              value={formData.Debuttime}
              min="09:00"
              max="18:00"
              onChange={handleInputChange}
              required
            />
            <Form.Label htmlFor="Enddate">Date de  fin de l'evenement:</Form.Label>
            <Form.Control
              type="date"
              id="Enddate"
              value={formData.Enddate}
              onChange={handleInputChange}
              required
            />
            <Form.Label htmlFor="Endtime">Heure de fin de l'événement:</Form.Label>
            <Form.Control
              type="time"
              id="Endtime"
              value={formData.Endtime}
              min="09:00"
              max="18:00"
              onChange={handleInputChange}
              required
            />
            <Form.Label htmlFor="backgroundColor">Couleur de l'événement:</Form.Label>
            <Form.Control
            type="color"
            id="backgroundColor"
            value={formData.backgroundColor}
            onChange={handleInputChange}
            />
           </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
           </Button>
            {formData.title.length > 0 && formData.Debutdate.length > 0 && formData.Debuttime.length > 0 && formData.Enddate.length > 0 && formData.Endtime.length > 0 && formData.backgroundColor.length > 0 && (
              <Button variant="primary" onClick={handleSave} type="submit">
                Enregistrer
              </Button>
            )}
         
          </Modal.Footer>

      </Modal>
    </>
  );
};

export default EventModal;