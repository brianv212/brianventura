import React,{useState} from 'react';
import gql from 'graphql-tag';

import './Contact.css';

import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';

function Contact (props) {
    const [errors,setErrors] = useState({})

    const [values, setValues] = useState({
        email: '',
        message: ''
    });

    const onChange = (event) => {
      setValues({ ...values, [event.target.name]: event.target.value });
    };
  
    const onSubmit = (event) => {
      event.preventDefault();
      callback();
    };

    const [addComment, { loading }] = useMutation(CREATE_COMMENT, {
        variables: values,
        update() {
            setErrors({});
            setValues({
                email: '',
                message: ''
            })
            props.history.push('/');
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.errors);
        }
      });

    function callback() {
        addComment();
    }

    return (
        <div className="contact-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
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

const CREATE_COMMENT = gql`
  mutation createMessage(
    $email: String!
    $message: String!
  ) {
    createMessage(
        email: $email
        message: $message
    ) {
      id
      email
      message
      createdAt
    }
  }
`;

export default Contact