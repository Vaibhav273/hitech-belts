import { Col, Container, Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import siteLogo from "../../assets/images/logo.png";

function Header() {
    return (
        <>
            <div className="border-top-header">
                <Col xl={{ span: 10, offset: 1 }} className="top-header-contact">
                    <p>E-mail : <a href="mailto:info@tcahindustan.in">info@tcahindustan.in</a>, <a href="mailto:sales@tcahindustan.in">sales@tcahindustan.in</a></p>
                    <p>Contact : <span>079877-83321</span>, <span>099771-33321</span></p>
                </Col>
            </div>
            <Col md={{ span: 10, offset: 1 }}>
                <Navbar expand="xl">
                    <Container fluid className="px-0">
                        <Navbar.Brand href="#">
                            <Image src={siteLogo} className="img-fluid" alt="Logo" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Nav.Link as={NavLink} to={"/home"} className="nav-link">Home</Nav.Link >
                                <Nav.Link as={NavLink} to={"/about-us"} className="nav-link">About Us</Nav.Link >
                                <Nav.Link as={NavLink} to={"/products"} className="nav-link">Products</Nav.Link >
                                <Nav.Link as={NavLink} to={"/gallery"} className="nav-link">Gallery</Nav.Link >
                                <Nav.Link as={NavLink} to={"/contact"} className="nav-link contact-button">Contact</Nav.Link >
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
        </>
    );
}

export default Header;