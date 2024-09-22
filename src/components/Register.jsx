import {useContext, useEffect, useState} from 'react'
import {registerUser} from '../modules/registerUser'
import {replace, Link, useNavigate} from 'react-router-dom'
import './Login.css'

const Register = () => {
  
  const navigate = useNavigate()
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = async (e) => {
    e.preventDefault() 
    const data = await registerUser(name, email, username, password)
    if (data.status === 201){
      const authData = JSON.stringify({token: data.token})
      localStorage.setItem('authToken', authData)
      navigate(`/user/${username}`, {replace: true})
    }
  }
  
  return (
    <div className='container'>
      <div className='main-div'>
      <h1>Twitter Red </h1>
      <form id='user' onSubmit={(e) => submitHandler(e)} >
      <div className='inputs-group'>
          <input className='inputs-login'
          type='text' 
          id='name' 
          name='name' 
          placeholder='Nombre' 
          required 
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='inputs-group'>
          <input className='inputs-login'
          type='email' 
          id='email' 
          name='email' 
          placeholder='Email' 
          required
          onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='inputs-group'>
          <input className='inputs-login'
          type='text' 
          id='username' 
          name='username' 
          placeholder='Nombre de usuario' 
          required 
          onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='inputs-group'>
          <input className='inputs-login'
          type='text' 
          id='password' 
          name='password' 
          placeholder='Contraseña' 
          required
          onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type='submit' className='caccount-buttom'>Crear Cuenta</button>
        <div className='create-account'>
            <Link className='have-account' to='/login'>Ya tengo cuenta</Link>
          </div>
      </form>
    </div> 
  </div>
  )
}

export default Register