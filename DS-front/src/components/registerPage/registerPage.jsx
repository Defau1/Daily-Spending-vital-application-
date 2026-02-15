import { useForm } from 'react-hook-form'
import './RegisterPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function RegisterPage() {

    const [submitted, setSubmitted] = useState(false);
    const [authError, setAuthError] = useState('')


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
        if (!isValid) {
            return;
        }

        setSubmitted(true)

        navigate('/login-page')


    //     fetch('https://your-api.com/register', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data) // data = { email, password }
    // })
    // .then(response => response.json())
    // .then(result => {
    //     console.log('Успешно зарегистрирован:', result);
    //     navigate('/login-page');
    // })
    // .catch(error => {
    //     console.error('Ошибка регистрации:', error);
    //     setAuthError('Ошибка при регистрации');
    // })
    // .finally(() => {
    //     setSubmitted(false);
    // });

    }

    

    return (
        <>
            <Link to='/'>
                <button>На главную</button>
            </Link>

            <form onSubmit={handleSubmit(submit)}>
                    
                <h2>Пожалуйста, зарегистрируйтесь</h2> <br />

                {authError && (
                    <div className="alert alert-danger">
                        { authError }
                    </div>
                )}

                <div className={`form-control ${errors.nickname ? 'invalid' : '' }`}>

                    <label htmlFor="nickname">Введите имя</label>
                    <input 
                    type="text" 
                    placeholder='Anna'
                    id='nickname'
                    {...register('nickname', {
                        required: true
                    })}
                    />

                    {errors.nickname && (
                        <div className="validation">

                            {errors.nickname.type === 'required' && (
                                <small>
                                    Введите имя
                                </small>
                            )}

                        </div>
                    )}

                </div>

                <div className={`form-control ${errors.email ? 'invalid' : ''}`}>
                    <label htmlFor='email'>Введите свою почту</label>
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
                            )}

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
                        Зарегистрироваться
                    </button>
                    <Link to='/login-page'>
                        <button>Есть аккаунт?</button>
                    </Link>
                </div>
            </form>

        </>
    )

}
export default RegisterPage;