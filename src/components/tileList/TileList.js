import React from "react";

import {Tile} from '../tile/Tile';

export const TileList = (props) => {

  let contactTiles; 
  let appointmentTiles;

  if(props.contacts){
    contactTiles = props.contacts.map((contact, index )=> {
      return <Tile key={index} name={contact.name} phone={contact.phone} email={contact.email}/>
    })
  } else if(props.appointments){
    appointmentTiles = props.appointments.map((appointment, index )=> {
      return <Tile key={index} title={appointment.title} contact={appointment.contact} date={appointment.date} time={appointment.time}/>
    })
  }

  // })

  return (
    <div>
      {contactTiles}
      {appointmentTiles}
    </div>
  );
};
