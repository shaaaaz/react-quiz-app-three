import { Component } from "react"
import Questions from '../resources/Questions.json'
import { Link } from "react-router-dom"

class QuizComponent extends Component {

    constructor() {
        super()
        this.state = {
            number: 0,
            attempted: 0,
            correct: 0,
            wrong: 0
        }
    }

    render() {

        let currQuestion = Questions[this.state.number]
        let currentQuestionNumber = this.state.number

        let handlePrevious = () => {

            if (currentQuestionNumber == 0) {
                alert("THIS IS THE FIRST QUESTION")
            }
            else {
                this.setState({
                    number: currentQuestionNumber - 1
                })
            }
        }

        let handleNext = () => {

            if (currentQuestionNumber == 14) {
                alert("THIS IS THE LAST QUESTION")
            }
            else {
                this.setState({
                    number: currentQuestionNumber + 1
                })
            }
        }

        const checkAnswer = (optionSelected) => {
            console.log(currQuestion)
            if (currQuestion.answer == optionSelected) {
                alert("Correct Answer!")
                this.setState({
                    correct: this.state.correct + 1
                })
            }
            else {
                alert("WRONG ANSWER :(")
                this.setState({
                    wrong: this.state.wrong + 1
                })
            }
            this.setState({
                number: this.state.number + 1,
                attempted: this.state.attempted + 1
            })
        }

        let handleQuit = () => {
            alert("Do you want to Quit?")
        }

        return (
            <>
                <div className="home">
                    <div className="whiteArea">
                        <div className="question">
                            Question
                        </div>

                        <div className="number">
                            {this.state.number + 1} of 15
                        </div>

                        <div className="questionText">
                            {currQuestion.question}
                        </div>

                        <div className="entire">
                            <div className="options">
                                <div className="part1">
                                    <div onClick={() => checkAnswer(currQuestion.optionB)} className="option">{currQuestion.optionA}</div>
                                    <div onClick={() => checkAnswer(currQuestion.optionB)} className="option">{currQuestion.optionB}</div>
                                </div>
                                <div className="part2">
                                    <div onClick={() => checkAnswer(currQuestion.optionC)} className="option">{currQuestion.optionC}</div>
                                    <div onClick={() => checkAnswer(currQuestion.optionD)} className="option">{currQuestion.optionD}</div>
                                </div>
                            </div>
                        </div>

                        <div className="buttonArea">
                            <button className="buttonBlue buttons"
                                onClick={handlePrevious}>

                                Previous

                            </button>

                            <button className="buttonGreen buttons"
                                onClick={handleNext}>

                                Next

                            </button>

                            <button className="buttonRed buttons"
                                onClick={handleQuit}>

                                Quit

                            </button>

                            <Link to={{ pathname: "/result", state: this.state }}>

                                <button className="buttonGray buttons"
                                >

                                    FINISH

                                </button>

                            </Link>

                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default QuizComponent