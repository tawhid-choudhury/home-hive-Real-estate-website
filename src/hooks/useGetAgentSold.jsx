
import { useQuery } from '@tanstack/react-query';
import { getAgentSoldList } from '../api/agentDashboardApi';

const useGetAgentSold = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["Agent solds 109830183018294567465", email],
        queryFn: () =>
            getAgentSoldList(email).then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetAgentSold;