import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
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

const SupportPage = () => {
    const {control, handleSubmit} = useForm();

    const classes = useStyles();

    return (
        <Grid padding={5}>
            <form onSubmit={handleSubmit}>
                <Grid pt={4} pb={3}>
                    <Typography className={classes.typo} variant="h5">Contact Support</Typography>
                </Grid>

                <Grid padding={5}>
                    <Grid spacing={1} pb={3}>
                        <Controller
                            name="subject"
                            control={control}
                            defaultValue=""
                            rules={{required: 'subject required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Subject"
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
                    <Grid spacing={1} pb={3}>
                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""
                            rules={{required: 'Message is required'}}
                            render={({field: {onChange, value}, fieldState: {error}}) => (
                                <TextField
                                    label="Message"
                                    fullWidth
                                    required
                                    multiline
                                    rows={4}
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                        />
                    </Grid>

                    <Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary">
                            Create Support Ticket
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    );
};

export default SupportPage;