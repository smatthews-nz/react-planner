import React from "react";

export const ContactForm = (props) => {
  //handlers
  const handleNameChange = ({target}) => {
    props.setName(target.value)
  }

  const handlePhoneChange = ({target}) => {
    props.setPhone(target.value)
  }

  const handleEmailChange = ({target}) => {
    props.setEmail(target.value) 
  }

  return (
    <form onSubmit={props.handleSubmit}>
      <input type="text" placeholder="Full Name" value={props.name} onChange={handleNameChange}/>
      <input type="tel" placeholder="Phone Number"value={props.phone} onChange={handlePhoneChange} pattern="(^\([0]\d{1}\))(\d{7}$)|(^\([0][2]\d{1}\))(\d{6,8}$)|([0][8][0][0])([\s])(\d{5,8}$)"/>
      <input type="email" placeholder="Email" value={props.email} onChange={handleEmailChange}/>
      <input type="submit"/>
    </form>
  )
}

