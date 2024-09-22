import {useState} from 'react'
import deletePosts from '../modules/deletePosts'
import deleteIcon from '../assets/delete.svg'
import profilePic from '../assets/pic.jpg'
import './Tweet.css'

const Tweet = ({text, user, date, id, deletePost, setDeletePost}) => {
    
    return (
        <div className='tweet-containers'>
            <div className='left-div'>
                {/* <img src={profilePic} alt='Profile picture'/> */}
            </div>
            <div className='right-div'>
                <div className='top-div'>
                    <span className='name'>Ronald</span>
                    <span className='username'>@{user}</span>
                    <span className='date'>{date}</span>
                </div>
                <p className='tweet'>{text}</p>
            </div>
            <div className='delete-con'>
                <img className='delete-btn' src={deleteIcon} alt="xd" onClick={()=> deletePosts(user, id, deletePost,setDeletePost)} />
            </div>
        </div>
    )
}

export default Tweet