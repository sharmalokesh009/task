import React from 'react'
import {Link} from "react-router-dom"
import {Box} from "@mui/material"

const Home = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} mt={40} rowGap={5} >
        <Link to='/users' >Users</Link>
        <Link to='/posts' >Posts</Link>
    </Box>

    )
}

export default Home