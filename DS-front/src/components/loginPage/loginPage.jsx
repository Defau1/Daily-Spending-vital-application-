import './LoginPage.css'
import { Link } from 'react-router-dom';

function LoginPage() {
    return (
        <>
            <Link to='/'>
                <button>На главную</button>
            </Link>
            <div className="container">
                <h2>Пожалуйста, войдите в аккаунт</h2> <br />
                <div className="form-email">
                    <p>Введите свою почту</p>
                    <input type="email" placeholder='email@gmail.com'/>
                </div>
                <div className="form-password">
                    <p>Введите пароль</p>
                    <input type="password" placeholder='12345...'/>
                </div>
                <div className="form-under">
                    <button>Войти</button>
                    <Link to='/register-page'>
                        <button>Нет аккаунта?</button>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default LoginPage;