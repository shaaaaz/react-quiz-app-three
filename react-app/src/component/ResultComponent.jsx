import { Component } from "react";

export default class ResultComponent extends Component{


    render() {

        console.log(this.props)
        // const { state } = this.props.location;

        return (
            <>
                <div className="resultsPage">
                    <div className="resultsHeading">
                        Results
                    </div>

                    <div className="resultsWhitePart">
                        <div className="statement">
                            You need more practice!
                        </div>

                        <div className="score">
                            Your score is 20%
                        </div>

                        <div className="text">
                            <div className="texts">
                                <div>Total number of questions</div>
                                <div>15</div>
                            </div>
                            <div className="texts">
                                <div>number of attemtped questions</div>
                                <div>9</div>
                            </div>
                            <div className="texts">
                                <div>Number of correct answers</div>
                                <div>3</div>
                            </div>
                            <div className="texts">
                                <div>Number of wrong answers</div>
                                <div>6</div>
                            </div>
                        </div>

                    </div>


                    <div className="resultsButton">
                        <button className="rb again">PLAY AGAIN</button>
                        <button className="rb backToHome">BACK TO HOME</button>
                    </div>
                </div>
            </>
        )
    }
}