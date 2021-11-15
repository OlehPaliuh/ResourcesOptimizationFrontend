import React from 'react'
import {Grid, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto';
import {Controller, useForm} from "react-hook-form";
import {authenticate} from "../../redux/user/userAction";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {useNavigate} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: "auto",
        bottom: 0
    },
    typo: {
        flexGrow: 1,
        textAlign: "center"
    }
}));

const Copyright = props => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};

const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {control, handleSubmit} = useForm();
    const {currentUser, error} = useSelector((state) => state.currentUser);

    const onSubmit = data => {
        const formData = {
            username: data.username,
            password: data.password
        };

        dispatch(authenticate({formData}));

        const accessToken = localStorage.getItem('accessToken');

        if (currentUser || accessToken) {
            navigate("/dashboard");
        }
    };

    const classes = useStyles();

    return (

        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="50vh"
        >
            <form onSubmit={handleSubmit(onSubmit)}>

                <Typography className={classes.typo} variant="h5">Sign in</Typography>

                <Grid container>
                    <Grid item xs>
                        {error && <Alert severity="error">{error.message}</Alert>}
                    </Grid>
                </Grid>

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
                <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{required: 'Type required'}}
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


                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary">
                    Sign In
                </Button>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link href="/register" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Grid>
                </Grid>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </form>
        </Box>
    );
};

export default LoginComponent;