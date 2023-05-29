import { Box, Button, Dialog, Input, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePut from "../../../../hooks/usePut"
import { useNavigate, useParams } from 'react-router-dom'

const UpdateUserModal = ({ handleClose, modalOpen }) => {
    const navigate = useNavigate();

    const {id} = useParams();

    const { postData, response, loading, error } = usePut(`user/${id}`)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    const user = {
        firstName,
        lastName,
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
                    <Typography variant='h6' textAlign={"center"} >Update User</Typography>

                    <Input onChange={(e) => handleChange(e, setFirstName)} placeholder='First Name' />
                    <Input onChange={(e) => handleChange(e, setLastName)} placeholder='Last Name' />
                    <Button type='submit' variant='contained' color='success'>Update</Button>

                </Box>
            </form>
        </Dialog>
    )
}

export default UpdateUserModal