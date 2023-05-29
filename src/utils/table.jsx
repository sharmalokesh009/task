import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

const UsersTable = ({data}) => {

    const name  = 'Lokesh';


  return (
    <Box width={'50%'} margin={"auto"}>
        <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    data.map((user, index) => (
                        <TableRow>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell><Link to={`/user/${user.id}`} >{user.firstName}</Link></TableCell>
                        <TableCell>{user.lastName}</TableCell>
                    </TableRow>
                    ))
                }
              
            </TableBody>
        </Table>
    </TableContainer>
    </Box>
  )
}

export default UsersTable