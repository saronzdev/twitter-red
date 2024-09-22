import React, {useState} from 'react'
import createPosts from '../modules/createPosts'
import './CreatePosts.css'

const CreatePost = ({setPosts, username}) => {
    const [post, setPost] = useState({})
    
    const submitHandler = (e) => {
        e.preventDefault()
        createPosts(post, setPosts, username)
    }

    return (
        <div className='input-container'>
            <div className='form-container'>
                <form className='form-post' onSubmit={(e) => submitHandler(e)}>
                    <div className='input-post-container'>
                        <input className='input-post' type='text' id='new-post' placeholder='Crea una nueva publicación' required
                        onChange={(e) => setPost(e.target.value)} />
                        <button className='button-post' type='submit'>Publicar</button>
                    </div>
                    
                </form> 
            </div>
            
        </div>
    )
}

export default CreatePost