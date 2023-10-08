import { useParams } from "react-router-dom";
import Navbar from "../../SharedComponents/Header/Navbar";

const ServiceDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <p>{id}</p>
        </div>
    );
};

export default ServiceDetails;