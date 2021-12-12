import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const useStyle = makeStyles({
    header: {
        background: "rgba(20,100,85,0.98)"
    },
    tabs: {
        color: "#FFFFFF",
        textDecoration: "none",
        marginRight: 30,
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle();
    return(
        // Using position as static will arrange html elements in solid format where they do not overlap each other.
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                {/* Generally Typography is like paragraph tag but here using component we can change it to h1 or others */}
                <NavLink className={classes.tabs} to='./' >Work Info</NavLink>
                <NavLink className={classes.tabs} to='all' >All Todos</NavLink>
                <NavLink className={classes.tabs} to='add' >Add new Todo</NavLink>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;