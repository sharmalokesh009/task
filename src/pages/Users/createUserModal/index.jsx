import { Box, Button, Dialog, Input, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePost from '../../../hooks/usePost'
import {useNavigate} from "react-router-dom"

const CreateUserModal = ({ handleClose, modalOpen }) => {

    const navigate = useNavigate()

    const { postData, response, loading, error } = usePost('user/create')

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")

    const user = {
        firstName,
        lastName,
        email,
    }

    const handleChange = (e, setfn) => {
        const value = e.target.value;
        setfn(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        postData(user)
    }

    useEffect(() => {
        if (response) navigate(0);
        if (error) console.log(error);
        if (loading) console.log(loading);
    }, [response, error, loading])

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <Box p={3} borderRadius={10} width={300} display={"flex"} flexDirection={"column"} rowGap={2}>
                    <Typography variant='h6' textAlign={"center"} >Create User</Typography>

                    <Input onChange={(e) => handleChange(e, setFirstName)} placeholder='First Name' />
                    <Input onChange={(e) => handleChange(e, setLastName)} placeholder='Last Name' />
                    <Input onChange={(e) => handleChange(e, setEmail)} placeholder='Email' />
                    <Button type='submit' variant='contained' color='success'>Create</Button>

                </Box>
            </form>
        </Dialog>
    )
}

export default CreateUserModal