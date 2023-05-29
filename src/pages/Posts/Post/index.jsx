import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import useDelete from "../../../hooks/useDelete"
import UpdatePostModal from '../updateModal';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const navigate = useNavigate()

    const {postData, response, loading, error} = useDelete(`post/${post.id}`);

    const [modalOpen, setModalOpen] = useState(false);

    const deletePost = () => {
        postData();
    }

    useEffect(() => {
        if(response){
            navigate(0)
        }
        if(error){
            console.log(error)
        }
    },[response, error])


  return (
    <>
    {
    <UpdatePostModal modalOpen={modalOpen} postID={post.id} handleClose={() => setModalOpen(false)}/>
    }
    <Card  sx={{ maxWidth: 345 , width : 400 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={post.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={deletePost} color='error' variant='outlined' size="small">Delete</Button>
        <Button onClick={() => setModalOpen(true)} color='primary' variant='outlined' size="small">Update</Button>
      </CardActions>
    </Card>
    </>
  );
}

export default Post;