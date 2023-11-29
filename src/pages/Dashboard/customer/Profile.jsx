import useGetUserRole from '../../../hooks/useGetUserRole'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Profile = () => {
    const { user } = useContext(AuthContext)
    const { isPending, error, data } = useGetUserRole(user.email)
    console.log(data);
    console.log(user);

    if (isPending) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
            <Container sx={{ minHeight: "90vh", display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} maxWidth="lg">
                <Avatar
                    alt={user?.displayName}
                    src={user?.photoURL}
                    sx={{ width: 156, height: 156 }}
                />
                <Typography variant="h4" gutterBottom>
                    {user?.displayName}
                </Typography>
                <Typography variant="h4" gutterBottom>
                    {data?.role !== "customer" ? <>{data?.role}</> : <></>}
                </Typography>

            </Container>


        </div>
    );
};

export default Profile;