import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import InputGroup from 'react-bootstrap/InputGroup';
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const initialFormValues = {
    firstName: 'fn',
    lastName: 'ln',
};

const ContactForm = () => {
    const [name, setName] = useState("")
    const [checked, setChecked] = useState(false);
    const [formState, setFormState] = useState(initialFormValues);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Option 1', value: '1' },
        { name: 'Option 2', value: '2' },
    ];
    const allNotEmpty = !!formState.firstName && !!formState.lastName;
    const firstNameString = typeof formState.firstName === "string";
    const lastNameString = typeof formState.lastName === "string";

    return (
        <Form className="mb-5">
            <Form.Group className="mb-3" controlId="formFirstName">
                <Form.Label>whats ur first name?</Form.Label>
                <Form.Control
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Text
                    className="text-muted"
                    hidden={name.length<1}
                >
                hi {name}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formLastName">
                <Form.Label>how about your last name?</Form.Label>
                <Form.Control/>
            </Form.Group>
            
            {/* <Form.Label>what type of question do u have?</Form.Label>
            <ButtonGroup className="mb-3">
                {radios.map((radio, idx) => (
                <ToggleButton
                    key={idx}
                    id={`radio-${idx}`}
                    type="radio"
                    // variant={idx % 2 ? 'outline-success' : 'outline-danger'}
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                    {radio.name}
                </ToggleButton>
                ))}
            </ButtonGroup> */}

            {/* <InputGroup className="mb-3">
                <InputGroup.Text>what is ur question?</InputGroup.Text>
                <Form.Control as="textarea" aria-label="With textarea" />
            </InputGroup> */}

            <Button 
                variant="primary"
                type="submit"
                disabled={ !(allNotEmpty && firstNameString && lastNameString) }
            >
                Submit
            </Button>
        </Form>
    );
}

export default ContactForm;