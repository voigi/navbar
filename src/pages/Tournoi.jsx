import React, { useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import frLocale from '@fullcalendar/core/locales/fr';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import events from '../donnees/events.json';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional
import '../css/tournoi.css';
import { Calendar } from '@fullcalendar/core/index.js';

const Tournoi = () => {
  const navi = useNavigate();
  const calendarRef = useRef(null);


const { user } = useContext(UserContext);

  const backHome = () => {
    navi('/');
  };

  const returnlogin = () => {
    navi('/connect');

  };

  useEffect(() => {
    user === '' && returnlogin();
  }, [user]);

 const  handleMouseEnter = (arg) =>{
  const calendarApi = calendarRef.current.getApi();
  if(arg.event.extendedProps.description && calendarApi.currentData.viewApi.type !== 'listMonth' && calendarApi.currentData.viewApi.type !== 'dayGridDay'){
    tippy(arg.el, {
        content: arg.event.extendedProps.description,
        placement: 'bottom',
        theme:'tomato'
    });
  }  
 // console.log(calendarApi.currentData.viewApi.type)
}



  return (
    <div className='container mt-5' >
 <FullCalendar 
      

      plugins={[ dayGridPlugin, listPlugin, bootstrap5Plugin ]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next dayGridDay',
        center: 'title',
        right: 'dayGridWeek,dayGridMonth,listMonth'
      }}
      buttonText={
        {
          today: 'Aujourd\'hui',
          month: 'Mois',
          week: 'Semaine',
          day: 'Aujourd\'hui',
          list: 'Agenda',
          prev: 'Précédent',
          next: 'Suivant'
      }}
      locale={frLocale}
      ref={calendarRef}
      timeZone='Europe/Paris'
     themeSystem='bootstrap5'
 
    
      events={events}
      eventMouseEnter={handleMouseEnter}
    />

    <div className='mt-3'>
 <Button className="btn btn-primary" onClick={() => backHome()}>Retour</Button>
    </div>
    
    </div>
  
  )
}

export default Tournoi