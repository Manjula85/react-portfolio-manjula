import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from 'emailjs-com';

function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  // function handleChange(e) {
  //   if (e.target.name === "email") {
  //     const isValid = validateEmail(e.target.value);
  //     if (!isValid) {
  //       setErrorMessage("Your email is invalid.");
  //       setFormState({ ...formState, [e.target.name]: e.target.value });
  //     } else {
  //       setErrorMessage("default");
  //       setFormState({ ...formState, [e.target.name]: e.target.value });
  //     }
  //   } else {
  //     if (!e.target.value.length) {
  //       setErrorMessage(`${e.target.name} is required.`);
  //       setFormState({ ...formState, [e.target.name]: e.target.value });
  //     } else {
  //       setErrorMessage("default");
  //       setFormState({ ...formState, [e.target.name]: e.target.value });
  //     }
  //   }

  //   if (!errorMessage || errorMessage === "default") {
  //     setErrorMessage("");
  //     setFormState({ ...formState, [e.target.name]: e.target.value });

  //     console.log("Handle Form", formState);
  //   }
  // }
  function onChangeHandler(e) {
    console.log(e.target.value);
    setFormState({ ...formState, [e.target.name]: e.target.value });
    const key = e.target.name;
    switch (key) {
      case "name": {
        if (e.target.value.length > 0) {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage("");
        } else {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage(`${e.target.name} is required.`);
        }
        break;
      }
      case "email": {
        const isValid = validateEmail(e.target.value);
        if (isValid) {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage("");
        } else {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage("Your email is invalid.");
        }
        break;
      }
      case "message": {
        if (e.target.value.length > 0) {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage("");
        } else {
          //setFormState({ ...formState, [e.target.name]: e.target.value });
          setErrorMessage("Your message is invalid.");
        }
        break;
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Error message: " + errorMessage);

    // if (!errorMessage) {
    //   console.log("Submit form", formState);
    // }
    if(errorMessage.length === 0 && name.length > 0 && email.length > 0 && message.length > 0){
      console.log("Submit form", formState);

      //only send the email if there are no errors
      emailjs.sendForm('gmail','',e.target,'user_lyaYYxicXzJitwc6ufAhw')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
    }


  }

  return (
    <section>
      <h1 data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="name">Name:</lable>
          <input
            type="text"
            name="name"
            onBlur={onChangeHandler}
            defaultValue={name}
          />
        </div>
        <div>
          <lable htmlFor="email">Email address:</lable>
          <input
            type="email"
            name="email"
            onBlur={onChangeHandler}
            defaultValue={email}
          />
        </div>
        <div>
          <lable htmlFor="message">Message:</lable>
          <textarea
            type="message"
            name="message"
            rows="5"
            onBlur={onChangeHandler}
            defaultValue={message}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit" value="send">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
