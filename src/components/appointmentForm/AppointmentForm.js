import React from "react";

import {ContactPicker }from '../../components/contactPicker/ContactPicker';

export const AppointmentForm = (props) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };


  //handlers
  const handleTitleChange = ({target}) => {
    props.setTitle(target.value);
  }

  const handleContactChange = ({target}) => {
    props.setContact(target.value);
  }

  const handleDateChange = ({target}) => {
    props.setDate(target.value);
  }

  const handleTimeChange = ({target}) => {
    props.setTime(target.value);
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input value={props.title} type="text" onChange={handleTitleChange}/>
      <ContactPicker contacts={props.contacts} onChange={handleContactChange}/>
      <input value={props.date} type="date" min={getTodayString} onChange={handleDateChange}/>
      <input value={props.time} type="time" onChange={handleTimeChange}/>
      <input type="submit"/>
    </form>
  )

}
