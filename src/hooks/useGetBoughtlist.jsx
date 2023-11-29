
import { useQuery } from '@tanstack/react-query';
import { getBoughtlist } from '../api/customerDashboardAPI';

const useGetReviewFromUser = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["boughtList", email],
        queryFn: () =>
            getBoughtlist(email).then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetReviewFromUser;