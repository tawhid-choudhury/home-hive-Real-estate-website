import { useQuery } from '@tanstack/react-query';
import { getAgents } from '../api/homeAPI';

const useGetAgents = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["All asdasdasdasdasdusers 1233321weqczxcq1123"],
        queryFn: () =>
            getAgents().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetAgents;