import { Link } from 'react-router-dom'
import QuizComponent  from './QuizComponent'

export default function HomeComponent() {
    return (
        <>
            <div className="home">
                <h1 className="heading">QUIZ</h1>

                <Link to='/quiz'>
                    <button className="play">PLAY</button>
                </Link>
            </div>
        </>
    )
}