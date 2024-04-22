import { Carousel, Col, Image } from "react-bootstrap";
import sliderImage from '../assets/images/slider.png';

function HomeScreen() {
    return (
        <>
            <Col xl={12} className="p-0">
                <Carousel>
                    <Carousel.Item>
                        <Image src={sliderImage} className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={sliderImage} className="img-fluid" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={sliderImage} className="img-fluid" />
                    </Carousel.Item>
                </Carousel>
            </Col>
        </>
    );
}

export default HomeScreen;