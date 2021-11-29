import React from 'react'
import '@fontsource/roboto';
import {Controller, useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../redux";
import {useNavigate} from "react-router-dom";
import {Copyright} from "../login/LoginPage";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
    appBar: {
        top: "auto",
        bottom: 0
    },
    typo: {
        flexGrow: 1,
        textAlign: "center"
    }
}));

const RegisterComponent = () => {
    const {control, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {error, loading} = useSelector((state) => state.currentUser);

    const classes = useStyles();

    const onSubmit = async data => {
        const formData = {
            username: data.username,
            password: data.password,
            email: data.email,
            firstName: data.firstName,
            lastName: data.lastName,
            phoneNumber: data.phoneNumber
        };

        await dispatch(register({formData}));

        if (!loading && !error) {
            navigate("/login");
        }
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid pt={4} pb={3}>
                    <Typography className={classes.typo} variant="h5">Register</Typography>
                </Grid>

                <Grid container>
                    <Grid item xs>
                        {error && <Alert severity="error">{error.message}</Alert>}
                    </Grid>
                </Grid>

                <Grid spacing={1} pb={1}>
                    <Controller
                        name="firstName"
                        control={control}
                        defaultValue=""
                        rules={{required: 'First name required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="First Name"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>
                <Grid spacing={1} pb={1}>
                    <Controller
                        name="lastName"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Last name required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="Last Name"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>
                <Grid spacing={1} pb={1}>
                    <Controller
                        name="username"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Username required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="Username"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>

                <Grid spacing={1} pb={1}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Email required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="Email"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>

                <Grid spacing={1} pb={1}>
                    <Controller
                        name="phoneNumber"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Phone number required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="Phone number"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>

                <Grid spacing={1} pb={1}>
                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{required: 'Password required'}}
                        render={({field: {onChange, value}, fieldState: {error}}) => (
                            <TextField
                                label="Password"
                                fullWidth
                                required
                                value={value}
                                onChange={onChange}
                                error={!!error}
                                helperText={error ? error.message : null}
                            />
                        )}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Sign up
                </Button>

                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/login" variant="body2">
                            {"Already have an account? Sign in"}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </form>
        </Box>
    );
};
export default RegisterComponent;