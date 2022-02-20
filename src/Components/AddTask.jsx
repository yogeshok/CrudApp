import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        '& > *': {
            marginTop: 20
        }
    }
})

const AddTask = () => {
    const classes = useStyle();
    return (
        
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Task</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input />
            </FormControl>
            <Button variant="contained" color="primary">Add Task</Button>
        </FormGroup>
    )
}

export default AddTask;