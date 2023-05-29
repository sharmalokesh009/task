import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import useGet from '../../hooks/useGet';
import Post from './Post';
import CreatePostModal from './createPostModal';

const Posts = () => {
    const {response, error, loading} = useGet('post');

    const [posts, setPosts] = useState([])
    const [modalOpen , setModalOpen] = useState(false)


  

    useEffect(() => {
        if (response) {
            console.log(response)
            setPosts(response.data.data)
        };
        if (error) console.log(error);
        if (loading) console.log(loading);
    }, [response, response, response])

    return (
        <Box>
            <Button onClick={() => setModalOpen(true)}>Create Post</Button>
            <Box display={"flex"} width={"70%"} rowGap={2} flexWrap={"wrap"} justifyContent={"space-between"} margin={"auto"} >
            {
                posts.map(post => (
                    <Post post={post} />
                ))
            }
            </Box>
            <CreatePostModal modalOpen={modalOpen} handleClose={() => setModalOpen(false)} /> 
        </Box>
    )
}

export default Posts;