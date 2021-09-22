import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {Logo} from './components/logo'
import {Dialog} from '@reach/dialog'
import '@reach/dialog/styles.css'

function LoginForm({onSubmit, buttonText}) {
  function handleSubmit(e) {
    e.preventDefault()
    const {username, password} = e.target.elements
    onSubmit({
      username: username.value,
      password: password.value,
    })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">username</label>
        <input type="text" id="username" />
      </div>
      <div>
        <label htmlFor="password">password</label>
        <input type="text" id="password" />
      </div>
      <div>
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  )
}

function App() {
  const [openModal, setOpenModal] = useState('none')
  return (
    <div>
      <Logo />
      <h1>BookShelf</h1>
      <div>
        <button onClick={() => setOpenModal('login')}>Login</button>
      </div>
      <div>
        <button onClick={() => setOpenModal('register')}>Register</button>
      </div>

      <Dialog isOpen={openModal === 'login'} aria-label="login form">
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>Login</h3>
        <LoginForm
          buttonText="login"
          onSubmit={params => {
            console.log('login', params)
          }}
        />
      </Dialog>
      <Dialog isOpen={openModal === 'register'} aria-label="register form">
        <div>
          <button onClick={() => setOpenModal('none')}>Close</button>
        </div>
        <h3>register</h3>
        <LoginForm
          buttonText="register"
          onSubmit={params => {
            console.log('register', params)
          }}
        />
      </Dialog>
    </div>
  )
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
