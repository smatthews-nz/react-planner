import React from "react";

// export const ContactPicker = () => {
//   return (
//     ContactPicker
//   );
// };

export const ContactPicker = (props) => {

  let contactOptions;

  if(props.contacts){
    contactOptions = props.contacts.map(contact => {
      return <option key={contact.name}>{contact.name}</option>
    })
  }

  return (
    <select onChange={props.onChange}>
      <option key="no-contact" defaultValue>Choose a contact!</option>
      {contactOptions}
    </select>
  )
}