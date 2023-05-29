import { Box, Button, CardContent, CircularProgress, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../../../hooks/useGet'
import UpdateUserModal from './updateModal'
import useDelete from '../../../hooks/useDelete'
import {useNavigate} from "react-router-dom"

const User = () => {

    const navigate = useNavigate()

    const { id } = useParams();

    const [user, setUser] = useState(null);
    const [updateClicked , setUpdateClicked] = useState(false);

    const { response, loading, error } = useGet(`user/${id}`);
    const deleteUserApi = useDelete(`user/${id}`);

    useEffect(() => {
        {
            if (response) {
                console.log(response)
                setUser(response.data)
            };
            if (error) setUser(error.data.data);
        }
    }, [response, loading, error])

    useEffect(() => {
        if(deleteUserApi.response) navigate('/users')
        if(deleteUserApi.error) console.log(deleteUserApi.error)
        if(deleteUserApi.loading) console.log(deleteUserApi.loading)
    },[deleteUserApi])

    const deleteUser = () => {
        deleteUserApi.postData()
    }

    const updateUser = () => {
        setUpdateClicked(true)
    }

    return (
        !user ? <CircularProgress  color='success' /> : 
        <Box>
            <Typography variant='h5' >User Details</Typography>
            <CardContent>
                <Typography variant='body' >First Name :{user.firstName}</Typography>
                <Typography variant='body' >Last Name : {user.lastName}</Typography>
                <Button onClick={deleteUser} variant='outlined' color='error' >Delete</Button>
                <Button onClick={updateUser} variant='outlined' color='primary' >Update</Button>
               {updateClicked && <UpdateUserModal modalOpen={true}/> }
            </CardContent>
        </Box>
    )
}

export default User