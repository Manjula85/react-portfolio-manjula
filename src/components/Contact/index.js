import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers';


function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const {name, email, message} = formState;

    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value})
        console.log(setFormState); //where is this output?
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <lable htmlFor="name">Name:</lable>
                    <input type="text" name="name" onChange={handleChange} defaultValue={name}/>
                </div>
                <div>
                    <lable htmlFor="email">Email address:</lable>
                    <input type="email" name="email" onChange={handleChange} defaultValue={email}/>
                </div>
                <div>
                    <lable htmlFor="message">Message:</lable>
                    <textarea type="message" rows="5" onChange={handleChange} defaultValue={message}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;