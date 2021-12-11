import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    header: {
        background: "rgba(20,100,85,0.98)"
    }
})

const Navbar = () => {
    const classes = useStyle();
    return(
        // Using position as static will arrange html elements in solid format where they do not overlap each other.
        <AppBar className={classes.header} position='static'>
            <Toolbar>
                {/* Generally Typography is like paragraph tag but here using component we can change it to h1 or others */}
                <Typography component='h1'>Work Info</Typography>
                <Typography component='h1'>All Todos</Typography>
                <Typography component='h1'>Add new Todo</Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Navbar;