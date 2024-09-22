import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import loginUser from '../modules/loginUsers'
import './login.css'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const submitHandler = async (e) => {
    e.preventDefault()
    const data = await loginUser(username, password)
    if (data.status === 200) {
        const authData = JSON.stringify({token: data.token})
			  localStorage.setItem('authToken', authData)
			  navigate(`/user/${username}`, {replace: true})
		} else if (data.status === 404) alert('Usuario no encontrado')
      else if (data.status === 401) alert('Contraseña incorrecta')
  }

  return (
    <div className='container'>
      <div className='main-div'>
        <h1>Twitter Red </h1>
        <form id='user' onSubmit={(e) => submitHandler(e)}>
          <div className='inputs-group'>
            <input className='inputs-login'
            type='text' 
            id='username' 
            name='username' 
            placeholder='Nombre de usuario' 
            required 
            onChange={(e) => setUsername(e.target.value)}/>
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
          <button type='submit'className='login-button'>Iniciar Sesión</button>
          <div className='account'>
            <Link className='no-account' to='/register'>No tengo cuenta</Link>
            <Link className='forget-psw' to='/register'>¿Olvidaste la contraseña?</Link>
          </div>
        </form>
      </div> 
    </div>
)}

export default Login
