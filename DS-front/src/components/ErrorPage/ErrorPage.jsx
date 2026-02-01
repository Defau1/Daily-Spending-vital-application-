import './ErrorPage.css'
import { Link } from 'react-router-dom'

function ErrorPage() {

    return(
        <>
            <div className="error-block">
                <h1>Похоже такой страницы не существует..</h1>
                <Link to='/'>
                    <button>Перейти на главную</button>
                </Link>
            </div>
        </>
    )

}
export default ErrorPage