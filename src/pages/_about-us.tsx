import { Col, Row, Image } from "react-bootstrap";
import CommonBreadcrumb from "./common-pages/_breadcrumb";

import aboutPlant from "../assets/images/about-text.png";

import { MdLocationCity } from "react-icons/md";
import { useEffect } from "react";

function AboutScreen() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <CommonBreadcrumb title={"About Us"} />
        </>
    );
}

export default AboutScreen;