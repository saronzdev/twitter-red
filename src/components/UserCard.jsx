import {useNavigate} from 'react-router-dom'
import './UserCard.css'

const UserCard = ({name, username, posts}) => {
    const navigate = useNavigate()
    const onClickHandler = (username) => {
       navigate(`/user/${username}`)
    }

    return (
        <div className='data-con' onClick={() => {onClickHandler(username)}} >
            <div className='key-con'>
                <span className='key'>Nombre: </span> 
                <span className='value'>{name}</span>
            </div> 
            <div className='key-con'>
                <span className='key'>Usuario: </span> 
                <span className='value'>{username}</span>
            </div>
            <div className='key-con'>
                <span className='key'>Publicaciones: </span> 
                <span className='value'>{posts}</span>
            </div>
        </div>
    )
}

export default UserCard