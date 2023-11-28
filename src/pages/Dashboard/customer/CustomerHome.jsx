import { useQuery } from "@tanstack/react-query";
import { getPropertyDetails } from "../../../api/propertyDetailAPI";

const CustomerHome = () => {
    const { isLoading, error, data } = 

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>

        </div>
    );
};

export default CustomerHome;