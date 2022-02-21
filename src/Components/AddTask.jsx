import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

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
    const history = useHistory();

    const onValueChange = (e) => {
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value})
        // console.log(user);
    }
    const addUserDetails = async () => {
        await addUser(user);
        history.push('./all');
    }

    return (
        
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Task</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="username" value={username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="email" value={email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name="phone" value={phone}/>
            </FormControl>
            <Button variant="contained" onClick={() => addUserDetails()} color="primary">Add Task</Button>
        </FormGroup>
    )
}

export default AddTask;