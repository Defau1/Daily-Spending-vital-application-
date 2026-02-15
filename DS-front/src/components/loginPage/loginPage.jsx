import { useState } from 'react';
import './LoginPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function LoginPage() {

    const [submitted, setSubmitted] = useState(false);
    const [authError, setAuthError] = useState('');
    
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors, isValid},
        watch,
        getValues
    } = useForm({
        mode: 'onTouched'
    })

    const passwordValue = watch('password') || '';

    const submit = (data) => {
        console.log('Form data', data);
        if(!isValid) {
            return
        }
        setSubmitted(true)

        
    }






    return (
        <>
            <Link to='/'>
                <button>На главную</button>
            </Link>

            <form onSubmit={handleSubmit(submit)}>

                <h2>Пожалуйста, войдите в аккаунт</h2> <br />

                {authError && (
                    <div className="alert alert-danger">
                        { authError }
                    </div>
                )}

                <div className={`form-control ${errors.email ? 'invalid' : ''}`}>
                    <label htmlFor="email">Введите вашу почту</label>
                    <input 
                    type="email" 
                    placeholder='email@gmail.com'
                    id='email'
                    {...register('email', {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        }
                    })}
                    />

                    {errors.email && (
                        <div className="validation">

                            {errors.email.type === 'required' && (
                                <small>
                                    Введите вашу почту
                                </small>
                            )}

                            {errors.email.type === 'pattern' && (
                                <small>
                                    Ваш email должен быть валидным
                                </small>
                            ) }

                        </div>
                    )}

                </div>

                <div className={`form-control ${errors.password ? 'invalid' : '' }`}>
                    <label htmlFor='password'>Введите пароль</label>
                    <input 
                    type="password" 
                    placeholder='12345...'
                    id='password'
                    {...register('password', {
                        required: true,
                        minLength: 6
                    })}

                    />

                    {errors.password && (
                        <div className="validation">

                            {errors.password.type === 'required' && (
                                <small>
                                    Введите ваш пароль
                                </small>
                            )}

                            {errors.password.type === 'minLength' && (
                                <small>
                                    Пароль должен быть не менее 6 символов
                                    Сейчас он - {passwordValue.length} символа
                                </small>
                            )}

                        </div>
                    )}

                </div>

                <div className="form-under">
                    <button
                    type='submit'
                    disabled={!isValid || submitted}
                    >
                        Войти
                    </button>
                    <Link to='/register-page'>
                        <button>Нет аккаунта?</button>
                    </Link>
                </div>

            </form>
        </>
    )
}
export default LoginPage;