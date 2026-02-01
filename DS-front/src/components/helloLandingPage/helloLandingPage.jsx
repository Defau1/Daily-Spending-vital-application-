import './HelloLandingPage.css'
import WillRodjers from '../../assets/Will_Rodjers.jpg';
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { ImEnter } from "react-icons/im";
import { Link } from 'react-router-dom';

function HelloLandingPage() {

    return(
        <>
        
            <div className='header'>
                <div className="logo-text">
                    <p>Daily Spending</p>
                </div>
                
                <div className="register-button">
                    <Link to='/register-page'>
                        <button>Регистрация<ImEnter size={20} /></button>
                    </Link>
                </div>
            </div>

            <div className='body'>
                <div className="info-block">
                    <h1>Добро пожаловать в приложение для отслеживания ежедневных расходов - Daily Spending!</h1>
                    <p><strong>Daily Spending</strong> — ваш надежный помощник в управлении личными финансами. 
                        Приложение помогает легко отслеживать ежедневные расходы, анализировать 
                        финансовые привычки и контролировать бюджет в реальном времени. 
                        Простой и понятный интерфейс позволяет быстро вносить траты, видеть 
                        наглядную статистику и планировать будущие покупки. Достигайте финансовых 
                        целей, экономьте с умом и живите с уверенностью в завтрашнем дне вместе с Daily Spending. <br />
                        Нажмите кнопку "Регистрация" и начните управлять своими финансами - <strong>Выгодно !</strong>
                    </p>
                </div>

                <div className="quote-block">
                    <div className="quote-text">
                        <h2>
                            <strong>
                                "Слишком многие люди тратят деньги, которые они с трудом заработали, 
                                на вещи, которые им не нужны, чтобы впечатлить людей, которые им не 
                                нравятся." Will Rogers
                            </strong>
                        </h2>  
                        <br /> <br />
                        <p> 
                            Эта цитата как нельзя лучше отражает суть Daily Spending. Наше приложение 
                            помогает разорвать этот порочный круг, научив вас тратить деньги с умом, 
                            осознанно и только на то, что действительно важно для вас. Контролируйте 
                            расходы, а не впечатляйте других. Инвестируйте в себя, а не в одобрение 
                            окружающих. Daily Spending — ваш инструмент для финансовой осознанности.
                        </p>
                    </div>
                    <div className="quote-photo">
                        <img src={WillRodjers} alt="WR" />
                    </div>
                </div>

            </div>

            <div className='footer'>
                <div className="copyright">
                    <p>Сайт курируется мной и только мной. Все права защищены 2026 ©</p>
                </div>
                <div className="socials">
                    <div>
                        <a href="https://github.com/Defau1"><FaGithub /></a>
                    </div>

                    <div>
                        <a href="https://t.me/Defau1ttt "><FaTelegram /></a>
                    </div>

                    <div>
                        <a href="https://www.linkedin.com/in/default-tony/"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

        </>
    )

}

export default HelloLandingPage;