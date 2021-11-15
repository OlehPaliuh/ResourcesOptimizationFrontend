import React from 'react'
import {Grid, TextField} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto';
import {Controller, useForm} from "react-hook-form";
import {Alert} from "@material-ui/lab";
import {authenticate} from "../../redux/user/userAction";
import {useDispatch, useSelector} from "react-redux";
import Button from "@material-ui/core/Button";
import {useNavigate} from "react-router-dom";

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

    return (
        <Box margin={5}>
            {error && <Grid container item xs={9}><Alert severity="error">{error.message}</Alert></Grid>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={3}>
                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Name required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Username"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Type required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Password"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button type="submit" variant="contained" color="primary"> Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default LoginComponent;