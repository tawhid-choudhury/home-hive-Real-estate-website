import { useQuery } from '@tanstack/react-query';
import { getAllProperties } from '../api/adminDashboardApi';

const useGetAllProperties = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["All property 123332asdasda1123"],
        queryFn: () =>
            getAllProperties().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetAllProperties;