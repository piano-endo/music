import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import {useState} from "react";
import './Button.css'

const ContactForm = () => {
    // Need these states to see if the fields have been filled or not
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactInfo, setContactInfo] = useState("");

    const [showToast, setShowToast] = useState(false);

    const submitForm = () => {
        // display toast
        setShowToast(true);

        // reset fields back to blank
        setFirstName("");
        setLastName("");
        setContactInfo("");
    }

    return (
        <>
            {/* Take advantage of Toast component from React Bootstrap */}
            {/* When clicked, toast displays itself only for 3 seconds */}
            <Toast
                onClose={() => setShowToast(false)} // Close the toast
                show={showToast} // Show/hide based on state
                delay={3000} // Auto-hide after 3 seconds
                autohide
            >
                <Toast.Header>
                    <strong className="me-auto">Form Submitted</strong>
                    <small>Thanks!</small>
                </Toast.Header>
                <Toast.Body>
                    Hi {firstName}, we'll be in touch soon.
                </Toast.Body>
            </Toast>

            {/* create a form with margin-bottom */}
            <Form className="mb-5">

                {/* collect first name */}
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>whats ur first name?</Form.Label>
                    <Form.Control
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {/* acknowledge the user */}
                    <Form.Text
                        className="text-muted"
                        hidden={firstName.length<1}
                    >
                    hi {firstName}
                    </Form.Text>
                </Form.Group>

                {/* collect last name */}
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>how about your last name?</Form.Label>
                    <Form.Control
                        value={lastName}
                    />
                </Form.Group>

                {/* collect contact information */}
                <Form.Group className="mb-3" controlId="formContactInfo">
                    <Form.Label>how can we contact you?</Form.Label>
                    <Form.Control
                        value={contactInfo}
                        onChange={(e) => setContactInfo(e.target.value)}
                    />
                </Form.Group>

                {/* button is disabled until first name and contact information is entered */}
                {/* show a toast upon clicking */}
                <Button
                    variant="primary"
                    type="button"
                    onClick={submitForm}
                    disabled={ !firstName || !contactInfo }
                    className='button-style'
                >
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default ContactForm;