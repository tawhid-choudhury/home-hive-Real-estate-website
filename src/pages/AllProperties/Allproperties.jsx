import { useEffect, useState } from "react";
import { getVerified } from "../../api/allpropertiesAPI";



const Allproperties = () => {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        getVerified()
            .then(data => setProperties(data))
    }, [])
    console.log(properties);
    return (
        <div>

        </div>
    );
};

export default Allproperties;