import { useQuery } from "@tanstack/react-query";
import { getPropertyDetails } from "../../../api/propertyDetailAPI";

const CustomerHome = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            getPropertyDetails('6564911b93c1592ba00a3a5d').then(
                (res) => (res),
            ),
    })

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <h1>{data.propertyTitle}</h1>
            <p>{data.propertyLocation}</p>
        </div>
    );
};

export default CustomerHome;