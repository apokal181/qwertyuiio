import React, {useState, useEffect, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import '../index.css'
import { useMessage } from '../hooks/message.hook'

export const AuthPage = () => {
    const auth = useContext(AuthContext)
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
        
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form})
            console.log(data)
            auth.login(data.token, data.userId)
        } catch (e) {}
    }

    return (
    
        <div className="container">
            <div className="col s6 offset-s3">
                <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Авторизация</span>
        <div>
            
        <div className="input-field">
          <input 
           placeholder="Введите email"
           id="email"
           type="text"
           name="email"
           onChange={changeHandler}
           />
        
        </div>

        <div className="input-field">
          <input 
           placeholder="Введите пароль"
           id="password"
           type="password"
           name="password"
           onChange={changeHandler}
           />
        
        </div>

        </div>
        </div>
        <div className="card-action">
          <button 
          className="btn yellow darken-4" 
          style={{marginRight: 10}}
          disabled={loading}
          onClick={loginHandler}
          >
              Войти
          </button>
          <button
           className="btn grey lighten-1 black-text"
           onClick={registerHandler}
           disabled={loading}
           >
               Регистрация
           </button>
        </div>
      </div>
    </div>
     </div>
    )
}