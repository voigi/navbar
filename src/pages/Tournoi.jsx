import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import frLocale from "@fullcalendar/core/locales/fr";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { AdminContext } from "../context/AdminContext";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import tippy from "tippy.js";
import "tippy.js/dist/tippy.css"; // optional
import "../css/tournoi.css";
import Modal from "../components/EventModal";
import Swal from "sweetalert2";
import UpdateEvent from "../components/UpdateData";
import { ToastContainer , toast } from "react-toastify";




const Tournoi = () => {
  const [couleurSelectionnee, setCouleurSelectionnee] = useState(null);
  
  const { status } = useContext(UserContext);
  const { user } = useContext(UserContext);

  console.log(JSON.parse(localStorage.getItem("updateEvents")));

  const navi = useNavigate();
  const calendarRef = useRef(null);

  const { admin } = useContext(AdminContext);

  const backHome = () => {
    navi("/");
  };

  const returnlogin = () => {
    navi("/connect");
  };



  //ds un useeffect, on vérifie si l'utilisateur est connecté ou non, si non on redirige vers la page de connexion
  useEffect(() => {
    user || (admin === "" && returnlogin());
  }, [user, admin]);

  const handleEventClick = (clickInfo) => {
    //modal que voulez faire? supprimé ou modifier un évenement ?

    Swal.fire({
      title: "Supprimer/Modifier un événement",
      text: `Voulez vous Supprimer ou Modifier "${clickInfo.event.title}" ?`,
      icon: "info",
      showDenyButton: true,
      showCancelButton: false,
      denyButtonText: `Modifier`,
      denyButtonColor: "#3085d6",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6495ED",
      confirmButtonText: "Supprimer ?",
      allowOutsideClick: false,
    })
    
    .then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Supprimer un événement",
          text: `Voulez vous vraiment supprimer "${clickInfo.event.title}" ?`,
          icon: "warning",
          showCancelButton: false,
          showDenyButton:true,
          denyButtonText: `Annuler`,
          confirmButtonColor: "#d33",
          denyButtonColor: "#6495ED",
          confirmButtonText: "Supprimer!",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            clickInfo.event.remove();
            const events = JSON.parse(localStorage.getItem("updateEvents"));
            const index = events.findIndex(
              (event) => event.title === clickInfo.event.title
            );
            if (index !== -1) {
              events.splice(index, 1);
              localStorage.setItem("updateEvents", JSON.stringify(events));
            }
            Swal.fire("Événement supprimé", "", "success");
          }
          if (result.isDenied) {
            Swal.fire("Événement non supprimé", "", "error");
          }
        });
        // Si l'élément est supprimé, on le recherche dans le localStorage et on le supprime, puis on met à jour le localStorage

      }
      if (result.isDenied) {
        console.log(clickInfo.event.start.toLocaleTimeString());
        Swal.fire({
          html: ` <div class="modal-body">
          <h3>Modifier l'événement </h3> 
          <h4 class="mb-3">
           " ${clickInfo.event.title}"
          </h4>
         
          <form  class="needs-validation was-validated" novalidate="">
            <div class="mb-3">
              <label for="title" class="form-label">Titre de l'événement:</label>
              <input type="text" id="title" class="form-control" value="${
                clickInfo.event.title
              }" required>
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description de l'événement:</label>
              <textarea id="description" class="form-control" rows="3">${
                clickInfo.event.extendedProps.description
              }</textarea>
            </div>
            <div class="mb-3">
            <label for="start" class="form-label">
            Date de début:
            </label>
           <input type="date" id="start" class="form-control" value="${clickInfo.event.start.toLocaleDateString()}" required>
            </div>
            <div class="mb-3">
            <label for="start" class="form-label">
            heure de debut:
            </label>
           <input type="time" id="startTime" class="form-control" value="${clickInfo.event.start.toLocaleTimeString()}" required>
            </div>
            <div class="mb-3">
            <label for="end" class="form-label">
            Date de fin:
            </label>
            <input type="date" id="end" class="form-control" value="${clickInfo.event.end.toLocaleDateString()}" required>
            </div>
            <div class="mb-3">
            <label for="end" class="form-label">
            heure de fin:
            </label>
             <input type="time" id="endTime" class="form-control" value="${clickInfo.event.end.toLocaleTimeString()}" required>
            </div>
            <div class="mb-3">
            <label for="backgroundColor" class="form-label">
            Couleur de fond:
            </label>
            <input type="color" id="backgroundColor" class="form-control" value="${
              clickInfo.event.backgroundColor
            }" required>
            </div>
          </form>
        </div>
        `,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Modifier",

          allowOutsideClick: false,
          allowEscapeKey: false,
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true,

          //disable button si les champs sont vides ou si la date de début est supérieur à la date de fin ou si l'heure de début est supérieur à l'heure de fin

          //je veux parcourir en temps reel  ds un console.log la longueur de la value de title (ex: je tape jj ça me renvoie 2, jjj ça me renvoie 3 ect ...)
        }).then((result) => {
          if (result.isConfirmed) {

            toast.success('Evenement modifié avec succès', {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            const events = JSON.parse(localStorage.getItem("updateEvents"));
            console.log(events);
            const index = events.findIndex(
              (event) => event.title === clickInfo.event.title
            );
            if (index !== -1) {
              events[index].title = document.getElementById("title").value;
              events[index].description =
                document.getElementById("description").value;
              events[index].start =
                document.getElementById("start").value +
                "T" +
                document.getElementById("startTime").value;

              events[index].end =
                document.getElementById("end").value +
                "T" +
                document.getElementById("endTime").value;
              events[index].backgroundColor =
                document.getElementById("backgroundColor").value;

              localStorage.setItem("updateEvents", JSON.stringify(events));
            }

            // console.log(clickInfo.event.extendedProps.description);
            //console.log(clickInfo.event.backgroundColor);

            const couleurDeFond =
              clickInfo.event.backgroundColor ||
              clickInfo.event.getBackgroundColor();
            setCouleurSelectionnee(couleurDeFond);

            clickInfo.event.setProp(
              "title",
              document.getElementById("title").value
            );
            clickInfo.event.setExtendedProp(
              "description",
              document.getElementById("description").value
            );
            clickInfo.event.setStart(
              document.getElementById("start").value +
                "T" +
                document.getElementById("startTime").value
            );
            clickInfo.event.setEnd(
              document.getElementById("end").value +
                "T" +
                document.getElementById("endTime").value
            );
            couleurSelectionnee =
              document.getElementById("backgroundColor").value;
          }
        

        });

        document.getElementsByClassName("swal2-confirm")[0].disabled = true;

        const titleInput = document.getElementById("title");
        const startInput = document.getElementById("start");
        const endInput = document.getElementById("end");

        const confirmButton =
          document.getElementsByClassName("swal2-confirm")[0];

        const checkInputs = () => {
          if (
            titleInput.value.length > 0 &&
            startInput.value.length > 0 &&
            endInput.value.length > 0
          ) {
            confirmButton.disabled = false;
          } else {
            confirmButton.disabled = true;
          }
        };

        titleInput.addEventListener("input", checkInputs);
        startInput.addEventListener("input", checkInputs);
        endInput.addEventListener("input", checkInputs);
      }
    });
  };

  const handleMouseEnter = (arg) => {
    const calendarApi = calendarRef.current.getApi();
    if (
      arg.event.extendedProps.description &&
      calendarApi.currentData.viewApi.type !== "listMonth" &&
      calendarApi.currentData.viewApi.type !== "dayGridDay"
    ) {
      tippy(arg.el, {
        content: arg.event.extendedProps.description,
        placement: "bottom",
        theme: "tomato",
      });
    }
  };

  let options = {
    plugins: [dayGridPlugin, listPlugin, bootstrap5Plugin],

    initialView: "dayGridMonth",

    headerToolbar: {
      left: "prev,next dayGridDay",
      center: "title",
      right: "dayGridWeek,dayGridMonth,listMonth",
    },

    buttonText: {
      today: "Aujourd'hui",
      month: "Mois",
      week: "Semaine",
      day: "Aujourd'hui",
      list: "Agenda",
      prev: "Précédent",
      next: "Suivant",
    },

    locale: frLocale,

    themeSystem: "bootstrap5",

    ref: calendarRef,
  };

  let Adminoptions = {
    plugins: [dayGridPlugin, listPlugin, bootstrap5Plugin, interactionPlugin],

    initialView: "dayGridMonth",
    editable: true,
    droppable: true,
    selectable: true,
    eventClick: handleEventClick,

    headerToolbar: {
      left: "prev,next dayGridDay",
      center: "title",
      right: "dayGridWeek,dayGridMonth,listMonth",
    },

    buttonText: {
      today: "Aujourd'hui",
      month: "Mois",
      week: "Semaine",
      day: "Aujourd'hui",
      list: "Agenda",
      prev: "Précédent",
      next: "Suivant",
    },

    locale: frLocale,

    themeSystem: "bootstrap5",

    ref: calendarRef,
  };

  if (admin) {
    options = Adminoptions;
  }

  return (
    <div
      className="container mt-5"
      style={{ position: "relative", top: "25px" }}
    >
      {admin && (
        <div style={{ position: "absolute", left: "20vw" }}>
          <Modal/>
        </div>
      )}
      {admin && <ToastContainer position="bottom-right" theme="colored" />}
      {user && (
        <div style={{ position: "absolute", left: "20vw" }}>
          <UpdateEvent />
        </div>
      )}

      <FullCalendar


        {...options}
        events={JSON.parse(localStorage.getItem("updateEvents"))}
        eventMouseEnter={handleMouseEnter}

      />

      <div className="container mt-4">
        <div className="row">
          <div className="legende d-flex justify-content-around  border border-dark rounded p-3">
    
        
        
           
           <div className="d-flex align-items-center"><div className="fc-daygrid-event-dot" style={{borderColor:"green"}}></div>Tournoi</div>
          
            
           <div className="d-flex align-items-center"><div className="fc-daygrid-event-dot" style={{borderColor:"red"}}></div>Match</div>
           
           <div className="d-flex align-items-center"><div className="fc-daygrid-event-dot" style={{borderColor:"blue"}}></div>Match nul</div>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <Button className="btn btn-primary" onClick={() => backHome()}>
          Retour
        </Button>
      </div>
    </div>
  );
};

export default Tournoi;
