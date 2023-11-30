
import { useQuery } from '@tanstack/react-query';
import { getAgentBoughtlistRequests } from '../api/agentDashboardApi';

const useGetAgentBoughtlistRequests = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["Agent Requests 109830183018294567465", email],
        queryFn: () =>
            getAgentBoughtlistRequests(email).then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetAgentBoughtlistRequests;