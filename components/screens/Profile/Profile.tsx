import { useEffect, useState } from 'react';
import Link from 'next/link';

// import { Paper,} from '@material-ui/core'
import { Paper, Avatar, Typography, Box } from '@mui/material';


const Profile = () => {
    const [user, setUser] = useState({
        email: '',
        role: ''
    })

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])

    return (
        <Paper >
            {/* <Paper className={classes.profile}> */}
            <Avatar  >{user?.email.charAt(0)}</Avatar>
            <Box >
                {/* <Box className={classes.userInfo}> */}
                <Typography variant='body1'>{user?.email}</Typography>
            </Box>
        </Paper>
    )
}

export default Profile;