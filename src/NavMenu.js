import "./App.css";
import Container from "react-bootstrap/Container";
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const navMenu = () => {
  
  return (
    <Navbar expand="lg" variant="light" bg="info">
        <Container>
        <LinkContainer to="/">
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
        </LinkContainer>

        <Nav className="mr-auto">
        
            <LinkContainer to="/">
            <   Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/progress">
                <Nav.Link>Features</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">  
                <Nav.Link>Pricing</Nav.Link>
            </LinkContainer>
            
        </Nav>
        </Container>
    </Navbar>
  )

}

export default navMenu