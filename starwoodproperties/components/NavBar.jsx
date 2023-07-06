import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
export default function NavBar() {
    return (
        <Navbar expand="lg" className="navBar">
            <Container className='w-75'>
                <Navbar.Brand href="#home">
                    <img width={160} src="/images/logo.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto ">
                        <Nav.Link as={Link} href="/" className="text-white linkz" >Home</Nav.Link>
                        <NavDropdown title={
                            <span className="text-white linkz text-center">For Sale</span>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Property For Sale</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Apartments for Sale</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Villas for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Townhouses for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Penthouses for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Studio Apartments</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Offices for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Warehouse for Sale in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Duplex for Sale in Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={
                            <span className="text-white linkz text-center">For Rent</span>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Property for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Apartments For rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Townhouses for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Penthouses For rent In Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Studio Apartments for rent in Dubai</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.1">Offices for rent in Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={
                            <span className="text-white linkz text-center">Services</span>
                        } id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} href="/services/propertyManagement">Property Management</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/about" className="text-white linkz">About Us</Nav.Link>
                        <Nav.Link as={Link} href="/contact" className="text-white linkz">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
