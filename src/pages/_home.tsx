import { Carousel, Image } from "react-bootstrap";
import slider1 from "../assets/images/slider-1.jpg";
import slider2 from "../assets/images/slider-2.jpg";
import slider3 from "../assets/images/slider.jpg";
import slider4 from "../assets/images/slider-3.jpg";

function HomeScreen() {
    return (
        <>
            <Carousel style={{ padding: 0 }}>
                <Carousel.Item>
                    <Image src={slider1} alt="Slider 1" className="img-fluid" />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={slider2} alt="Slider 2" className="img-fluid" />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={slider3} alt="Slider 3" className="img-fluid" />
                    {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <Image src={slider4} alt="Slider 4" className="img-fluid" />
                    {/* <Carousel.Caption>
                        <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeScreen;