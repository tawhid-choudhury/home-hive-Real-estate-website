import { useQuery } from '@tanstack/react-query';
import { getFeatured } from '../api/homeAPI';

const useGetFeatured = () => {
    console.log();
    const { isPending, error, data, refetch } = useQuery({
        queryKey: ["featured123321"],
        queryFn: () =>
            getFeatured().then(
                (res) => {
                    console.log(res);
                    return (res)
                }
            ),
    })
    console.log(data);
    const featured = data;
    const featuredpending = isPending;
    const featurederror = error;
    const featuredRefetch = refetch;
    return ({ featured, featuredpending, featurederror, featuredRefetch });
};

export default useGetFeatured;