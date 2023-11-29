
import { useQuery } from '@tanstack/react-query';
import { getBoughtlist } from '../api/customerDashboardAPI';

const useGetBoughtlist = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["boughtListzxcwqeasdasd", email],
        queryFn: () =>
            getBoughtlist(email).then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetBoughtlist;