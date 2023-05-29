import { Box, Button, Dialog, Input, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePost from '../../../hooks/usePost'

const CreatePostModal = ({ handleClose, modalOpen }) => {

    const { postData, response, loading, error } = usePost('post/create')

    const [title, setTitle] = useState("")
    const [text, settext] = useState("")

    const user = {
        // title,
        text,
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
        if (response) console.log(response);
        if (error) console.log(error);
        if (loading) console.log(loading);
    }, [response, error, loading])

    return (
        <Dialog open={modalOpen} onClose={handleClose}>
            <form onSubmit={handleSubmit}>
                <Box p={3} borderRadius={10} width={300} display={"flex"} flexDirection={"column"} rowGap={2}>
                    <Typography variant='h6' textAlign={"center"} >Create Post</Typography>

                    <Input onChange={(e) => handleChange(e, setTitle)} placeholder='Title' />
                    <Input onChange={(e) => handleChange(e, settext)} placeholder='Description' />
                    <Button type='submit' variant='contained' color='success'>Create</Button>

                </Box>
            </form>
        </Dialog>
    )
}

export default CreatePostModal