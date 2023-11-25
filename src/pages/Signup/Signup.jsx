import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Card, CardActions, CardContent, Container, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { motion } from "framer-motion"
import { useState } from "react";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <motion.div className=" bg-cover h-[100vh] flex flex-col justify-center
            bg-gradient-to-bl  from-[#032e4b] from-40% via-emerald-800  to-[#032e4b] animate-gradient
            ">
                <Container maxWidth="xl" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Typography color={'white'} variant="h2">
                                Create an account
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Card sx={{ width: "90%" }}>
                                <CardContent>
                                    <form
                                        style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <AccountCircleIcon sx={{ width: 150, height: 150 }} />
                                        <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
                                            Upload Image
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                        <TextField sx={{ my: 3 }} required id="UserName" label="User Name" variant="standard" fullWidth />
                                        <TextField sx={{ mb: 3 }} required id="UserName" label="Email" type="email" variant="standard" fullWidth />
                                        <FormControl sx={{ width: "100%", mb: 3 }} variant="standard" required>
                                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                            <Input
                                                id="standard-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                        <Button sx={{ my: 3 }} type="submit" variant="contained" fullWidth>Create Account</Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </motion.div>
        </div>
    );
};

export default Signup;