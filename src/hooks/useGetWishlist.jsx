
import { useQuery } from '@tanstack/react-query';
import { getwishlist } from '../api/customerDashboardAPI';

const useGetReviewFromUser = (email) => {
    console.log(email);
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["wishlist", email],
        queryFn: () =>
            getwishlist(email).then(
                (res) => {
                    return (res)
                }
            ),
    })

    return ({ isPending, error, data, refetch });
};

export default useGetReviewFromUser;