import {useState, useEffect} from 'react'
import getUsers from '../modules/getUsers'
import UserCard from './UserCard'

const Home = () => {
    const [users, setUsers] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetching = async () => {
            await getUsers(setUsers, setLoading, setError)
        }
        fetching()
    }, [])

    if (loading){
        return <div>Cargando...</div>
    }

    if (error) {
        return <div>{error}</div>
    }
    
    return ( 
        <>
            <h1 className='top-text'>Usuarios</h1>
            <div className='cards-con'>
                {
                users.map((user, i) => {
                    return (
                        <UserCard key={i} name={user.name}  username={user.username}  posts={user.posts.length} />
                    )
                })
                }
            </div>
        </>
    )
}

export default Home 