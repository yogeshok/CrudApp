import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";

const useStyle = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        '& > *': {
            marginTop: 20
        }
    }
})

const initialValues = {
    name: "",
    username: "",
    email: "",
    phone: ""
} 

const AddTask = () => {

    const [ user, setUser ] = useState(initialValues);
    const { name, username, email, phone } = user;

    const classes = useStyle();
    const onValueChange = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value})
    }
    return (
        
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Task</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)}/>
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