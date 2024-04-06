import { Image } from "react-bootstrap";
import siteLogo from "../assets/images/logo.png";

function Loader() {
    return (
        <>
            <div className="loader">
                <div className="ring bg-light">
                    <Image src={siteLogo} className="img-fluid mt-4" alt="Logo"/>
                    <span></span>
                </div>
            </div>
        </>
    );
}

export default Loader;