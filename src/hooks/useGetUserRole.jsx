
import { useQuery } from '@tanstack/react-query';
import { getUserRole } from '../api/customerDashboardAPI';


const useGetUserRole = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["userDataasdasd", email],
        queryFn: () =>
            getUserRole(email).then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetUserRole;