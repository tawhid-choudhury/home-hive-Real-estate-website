
import { useQuery } from '@tanstack/react-query';
import { getPropertiesFromAgent } from '../api/agentDashboardApi';


const useGetPropertiesFromAgent = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["userDataxzczxczxc", email],
        queryFn: () =>
            getPropertiesFromAgent(email).then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetPropertiesFromAgent;