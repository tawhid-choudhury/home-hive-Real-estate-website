import { Container, TextField, Button } from '@mui/material';
import Swal from 'sweetalert2';
import Heading from '../../components/shared/TextStyles/Heading';

const Newsletter = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Thank You!",
            icon: "success"
        });
    };

    return (


        <div className="bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/3WjHCzv/61769.jpg)' }}>
            <div className='min-h-[500px] flex items-center'>
                <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: "space-around", bgcolor: "white", }} maxWidth="lg">

                    <Heading title={"Subscribe to Our Newsletter"} />
                    <form onSubmit={handleSubmit}>
                        <TextField type='email' />
                        <Button sx={{ py: 2 }} type="submit" variant="contained" color="primary" >
                            Subscribe
                        </Button>
                    </form>
                </Container>
            </div>
        </div>

    );
};

export default Newsletter;
