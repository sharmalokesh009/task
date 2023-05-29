import { Box, Button, Dialog, Input, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePut from '../../../hooks/usePut'
import { useNavigate } from 'react-router-dom'

const UpdatePostModal = ({ handleClose, modalOpen, postID }) => {
    const navigate = useNavigate();

    const { postData, response, loading, error } = usePut(`post/${postID}`)

    const [postTitle, setPostTitle] = useState("")
    const [postDescription, setPostDescription] = useState("")

    const post = {
        title: postTitle,
        text: postDescription,
    }

    const handleChange = (e, setfn) => {
        const value = e.target.value;
        setfn(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("clicked")
        postData(post)
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

                    <Input onChange={(e) => handleChange(e, setPostTitle)} placeholder='Post Title' />
                    <Input onChange={(e) => handleChange(e, setPostDescription)} placeholder='Post Description' />
                    <Button type='submit' variant='contained' color='success'>Update</Button>

                </Box>
            </form>
        </Dialog>
    )
}

export default UpdatePostModal;