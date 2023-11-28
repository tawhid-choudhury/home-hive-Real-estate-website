
import { useQuery } from '@tanstack/react-query';
import { getPropertyDetails } from '../api/propertyDetailAPI';

const useGetPropertyById = (propertyId) => {
    console.log(propertyId);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: [propertyId],
        queryFn: () =>
            getPropertyDetails(propertyId).then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetPropertyById;