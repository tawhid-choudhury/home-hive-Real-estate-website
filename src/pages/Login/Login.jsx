import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Alert, Avatar, Button, Card, CardContent, CircularProgress, Container, Divider, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion"
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import { saveUser } from "../../api/auth";
import axiosSecure from "../../api";






const Login = () => {

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [emailOk, setEmailOk] = useState(true);
    const [error, setError] = useState(false);
    const [errorText, setErrorText] = useState('');



    const [submitpressed, setsubmitpressed] = useState(false);

    const { googleSignin, loginEmailPass, user } = useContext(AuthContext);
    const nav = useNavigate();
    const location = useLocation();



    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        setEmailOk(emailRegex.test(e.target.value));
        if (!e.target.value) {
            setEmailOk(true);
        }
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        setsubmitpressed(true)

        if (!email || !emailOk) {
            setEmailOk(false);
            setsubmitpressed(false)
            return
        }
        try {

            const result = await loginEmailPass(email, password)
            console.log(result);
            Swal.fire({
                title: "Success!",
                text: "Account Created",
                icon: "success"
            });
            nav(location?.state ? location.state : "/")
        } catch (err) {
            setError(true);
            if (err?.message === "Firebase: Error (auth/invalid-login-credentials).") {
                setErrorText(`Invalid login credentials`)
            } else {
                setErrorText(`${err?.message}`)
            }
            Swal.fire({
                title: "Failed!",
                text: `${errorText}`,
                icon: "error"
            });

            console.log(err.message);
        }
        setsubmitpressed(false)
    }

    const handleGoogle = async () => {
        setsubmitpressed(true);

        try {
            const result = await googleSignin();
            const saveInDbRes = await saveUser(result?.user);
            console.log(saveInDbRes);
            Swal.fire({
                title: "Success!",
                text: "Account Created",
                icon: "success"
            });
            nav(location?.state ? location.state : "/");
        } catch (err) {
            Swal.fire({
                title: "Failed!",
                text: `${err?.message}`,
                icon: "error"
            });
            console.error(err);
        } finally {
            setsubmitpressed(false);
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <motion.div className=" bg-cover min-h-[100vh] flex flex-col justify-center
            bg-gradient-to-bl  from-[#032e4b] via-teal-600 via-50%  to-[#032e4b] animate-gradient
            ">
                <Container maxWidth="xl" sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Grid container spacing={2}>
                        <Grid item md={6} xs={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Typography color={'white'} textAlign='center' sx={{ mt: { xs: 12, md: 0 }, typography: { xs: 'h4', md: 'h2' } }}>
                                Log in to your account
                            </Typography>
                        </Grid>
                        <Grid item md={5} xs={12} sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                            <Card sx={{ width: "90%" }}>
                                {!user ?
                                    <CardContent>
                                        <form
                                            onSubmit={handleSubmit}
                                            style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}
                                            noValidate
                                            autoComplete="off"
                                        >


                                            <TextField
                                                sx={{ mt: 2 }}
                                                onChange={handleEmailChange}
                                                required id="Email"
                                                label="Email"
                                                type="email"
                                                variant="standard"
                                                fullWidth
                                                error={error || !emailOk}
                                            />
                                            {!emailOk ?
                                                <Alert sx={{ width: "100%" }} severity="error">Enter a valid email address</Alert>
                                                :
                                                email && <Alert sx={{ width: "100%" }} severity="success">Valid email</Alert>
                                            }
                                            <FormControl
                                                sx={{ width: "100%", my: 2 }}
                                                variant="standard"
                                                required
                                                error={error}
                                            >
                                                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                                <Input
                                                    onChange={handlePasswordChange}
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
                                            {error &&
                                                <Alert severity="error">{errorText}</Alert>
                                            }
                                            {submitpressed ?
                                                <CircularProgress color="primary" />
                                                :
                                                <Button
                                                    sx={{ my: 2 }}
                                                    type="submit"
                                                    variant="contained"
                                                    fullWidth

                                                >Log in</Button>
                                            }
                                        </form>
                                        <Divider sx={{ color: 'gray' }}>or</Divider>
                                        <Button
                                            disabled={submitpressed}
                                            onClick={handleGoogle}
                                            sx={{ my: 2 }}
                                            variant="outlined"
                                            color="secondary"
                                            startIcon={<FcGoogle className="text-2xl" />}
                                            fullWidth> Continue with Google </Button>
                                        New user? <Link to={'/signup'}><span className="underline text-blue-700">Create an account</span></Link>
                                    </CardContent>
                                    :
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="h5">
                                            Logged in as: {user?.displayName}
                                        </Typography>
                                        <Avatar
                                            alt=""
                                            src={user?.photoURL}
                                            sx={{ width: 150, height: 150, mb: 2 }}
                                        />
                                    </CardContent>
                                }
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </motion.div>
        </div>
    );
};

export default Login;