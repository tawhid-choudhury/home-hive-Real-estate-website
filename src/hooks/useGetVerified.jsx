
import { useQuery } from '@tanstack/react-query';
import { getVerified } from '../api/allpropertiesAPI';

const useGetVerified = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["vertifiedasdasdasdasdadasdasd"],
        queryFn: () =>
            getVerified().then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetVerified;