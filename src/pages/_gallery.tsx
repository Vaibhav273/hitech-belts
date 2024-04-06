import { Col } from "react-bootstrap";
import CommonBreadcrumb from "./common-pages/_breadcrumb";
import { useEffect } from "react";

function GalleryScreen() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <CommonBreadcrumb title={"Gallery"} />
            <Col className="gallery-section" md={{ span: 10, offset: 1 }}>
                <h4>Glimpses of Our Manufacturing Units</h4>
            </Col>
        </>
    );
}

export default GalleryScreen;