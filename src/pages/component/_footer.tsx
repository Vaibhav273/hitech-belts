import { Col, Container, Row, Image } from "react-bootstrap";
import siteLogo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <Container>
                    <Row>
                        <Col xl={5} className="d-flex flex-column justify-content-between">
                            <div className="footer-text">
                                <h1>Hi-tech Belts</h1>
                                <p>Efficiency, Durability & Reliability comes free with our Manufactured Conveyor Belts & Accessories with Hitech quality and performance meets excellence and moving your operation to the next level where sky is the limit so that you can convey your success with our Hitech Belts and Accessories.</p>
                            </div>
                            <div className="copyright-text">
                                <p>&copy; All Right Reserved. Hi-tech Belts</p>
                            </div>
                        </Col>
                        <Col xl={2} className="logo">
                            <Image src={siteLogo} className="img-fluid" alt="Logo" />
                        </Col>
                        <Col xl={5} className="d-flex flex-column justify-content-between">
                            <div className="footer-links">
                                <Row>
                                    <Col>
                                        <h1>Usefull Links</h1>
                                        <ul>
                                            <li><Link to="">Home</Link></li>
                                            <li><Link to="">About Us</Link></li>
                                            <li><Link to="">Products</Link></li>
                                            <li><Link to="">Gallery</Link></li>
                                            <li><Link to="">Contact</Link></li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <h1>Social Links</h1>
                                        <ul>
                                            <li><Link to="">Facebook</Link></li>
                                            <li><Link to="">Instagram</Link></li>
                                            <li><Link to="">X (Twitter)</Link></li>
                                            <li><Link to="">Youtube</Link></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </div>
                            <div className="copyright-text">
                                <p>Designed and Developed By - <a href="https://omayagroup.com/" target="_blank">Omaya Group</a></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Footer;