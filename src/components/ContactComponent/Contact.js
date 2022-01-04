import React,{useState} from 'react';
import './Contact.css';
import { Button, Form } from 'semantic-ui-react';

import axios from "axios";

function Contact (props) {
    const [messageSent , setMessageSent] = useState(false);

    const formId = "PgrJNO5T";
    const formSparkUrl = `https://submit-form.com/${formId}`;
    const [errors,setErrors] = useState({})
    const [values, setValues] = useState({
        email: '',
        message: ''
    });

    const onChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
  
    const onSubmit = async (event) => {
      event.preventDefault();
      postSubmission();
    };

    const postSubmission = async () => {
        console.log(values);
        setErrors({});

        if (values.email !== "" && values.message !== "") {
            try {
                const result = axios.post(formSparkUrl, values);
                setMessageSent(true);
                console.log(result);
            }
            catch (err) {
                console.log(err);
            }
        }
        else {
            if (values.email === "" && values.message === "") {
                setErrors({
                    email: "Please provide an email!",
                    message: "Please provide a thoughtful message!"
                })             
            }
            else if (values.message === ""){
                setErrors({
                    message: "Please provide a thoughtful message!"
                })     
            }
            else {
                setErrors({
                    email: "Please provide an email!"
                })     
            }
        }
    }

    return (
        <div className="contact-container">
            {messageSent 
            ? 
            <div>
                <h1 style={{marginTop: "10rem"}}>Message sent</h1>
                <p>Thank you!</p>                
            </div>

            :
            <Form onSubmit={onSubmit} noValidate>
                <h1>Say Hi!</h1>
                <Form.Input
                    placeholder="Email"
                    name="email"
                    type="text"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                    className="contact-input"
                />
                <Form.TextArea
                    style={{height: "250px", minHeight: "100px", maxHeight: "350px"}}
                    placeholder="Message.."
                    name="message"
                    type="message"
                    value={values.message}
                    error={errors.message ? true : false}
                    onChange={onChange}
                />
                <Button type="submit" primary >
                    Send
                </Button>
            </Form>
            }
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                    <ul className="list">
                        {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                        ))}
                    </ul>
                </div>
            )}    
        </div>
    )
}

export default Contact