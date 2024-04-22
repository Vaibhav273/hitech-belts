import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import siteLogo from "../../assets/images/logo.png";
import { MdAlternateEmail } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";

function Header() {
    return (
        <>
            <div className="top-header">
                <Container>
                    <Row>
                        <Col className="logo">
                            <Image src={siteLogo} className="img-fluid" alt="Logo" />
                        </Col>
                        <Col className="text">
                            <div className="d-flex align-items-center me-3 p-1">
                                <div className="d-flex flex-column border-custom">
                                    <MdAlternateEmail />
                                </div>
                                <div className="d-flex flex-column ps-3">
                                    <div><a href="mailto:info@tcahindustan.in">info@tcahindustan.in</a></div>
                                    <div><a href="mailto:sales@tcahindustan.in">sales@tcahindustan.in</a></div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-1">
                                <div className="d-flex flex-column border-custom">
                                    <FaSquarePhone />
                                </div>
                                <div className="d-flex flex-column ps-3">
                                    <span>079877-83321</span>
                                    <span>099771-33321</span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Navbar expand="xl">
                    <Container className="px-0">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link as={NavLink} to={"/"}>Home</Nav.Link >
                                <Nav.Link as={NavLink} to={"/about-us"}>About Us</Nav.Link >
                                <Nav.Link as={NavLink} to={"/products"}>Products</Nav.Link >
                                <Nav.Link as={NavLink} to={"/gallery"}>Gallery</Nav.Link >
                                <Nav.Link as={NavLink} to={"/contact"} className="contact-button">Contact</Nav.Link >
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
}

export default Header;