import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usePost from '../../hooks/usePost'
import UsersTable from '../../utils/table';
import CreateUserModal from './createUserModal';
import useGet from '../../hooks/useGet';

const Users = () => {
    const {response, error, loading} = useGet('user?created=1');

    const [users, setUsers] = useState([]);
    const [modalOpen , setModalOpen] = useState(false)


  

    useEffect(() => {
        if (response) {
            console.log(response)
            setUsers(response.data.data)
        };
        if (error) console.log(error);
        if (loading) console.log(loading);
    }, [response, response, response])

    return (
        <Box>
            <Button onClick={() => setModalOpen(true)}>Create User</Button>
            <UsersTable data={users}/>
            <CreateUserModal  modalOpen={modalOpen} handleClose={() => setModalOpen(false)}/>
        </Box>
    )
}

export default Users;