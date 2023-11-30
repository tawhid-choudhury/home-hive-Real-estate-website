import { useQuery } from '@tanstack/react-query';
import { getAllUsers } from '../api/adminDashboardApi';

const useGetAllUsers = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["All users 1233321weqczxcq1123"],
        queryFn: () =>
            getAllUsers().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    return ({ isPending, error, data, refetch });
};

export default useGetAllUsers;