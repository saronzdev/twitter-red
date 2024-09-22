import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import CreatePosts from '../components/CreatePosts'
import Tweet from '../components/Tweet'
import getPosts from '../modules/getPosts'
import './UserPage.css'

const UserPage = () => {
    const {username} = useParams()
    const [posts, setPosts] = useState({})
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [deletePost, setDeletePost] = useState(false)
    
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            await getPosts(username, setPosts, setLoading, setError)
        }
        fetchPosts()
    }, [deletePost])

    if (loading){
        return <div>Cargando...</div>
    }

    if (error){
        return <div>{error.toString()}</div>
    }

 

    return (
        <>
            {/*username === userLogged && */<CreatePosts setPosts={setPosts} username={username}/>}
            {
                posts.posts.length === 0 ? (
                    <div className='no-posts'>Ups... parece que no hay publicaciones aún</div>
                ) : (
                    posts.posts.map((post, i) => <Tweet text={post.body} user={posts.username} date={post.createdAt.time} id={post.id} deletePost={deletePost} setDeletePost={setDeletePost} key={i}/>)
                )
            }
        </>
    )    
}

export default UserPage