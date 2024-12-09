import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import pic from './util/logo.svg';
import {useNavigate} from 'react-router-dom';

function Logo() {
  const navigate = useNavigate();

  return (
    <>
        <Navbar className="bg-body-tertiary ps-4">
            <Container>
            {/* go back to the main page with a click */}
            <Navbar.Brand
              onClick={() => navigate(`../`)}
            >
                <img
                    src={pic}
                    alt="Logo"
                    width="200"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            </Container>
        </Navbar>
    </>
  )
}

  export default Logo;