import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Header from '../Header'

import './index.css'

class Home extends Component {
  state = {
    isLoading: false,
  }

  onClickStartQuiz = () => {
    this.setState({isLoading: true})
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={50} width={50} />
    </div>
  )

  renderHomePage = () => (
    <div className="home-page-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/quiz-game-start-the-quiz-img.png"
        className="img"
        alt="start quiz game"
      />
      <h1 className="home-heading">
        How Many Of These Questions Do You Actually Know?
      </h1>
      <p className="home-para">
        Test yourself with these easy questions and answers
      </p>
      <Link to="/quiz-game">
        <button
          className="start-button"
          type="button"
          onClick={this.onClickStartQuiz}
        >
          Start Quiz
        </button>
      </Link>

      <div className="warning-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/quiz-game-error-img.png"
          alt="warning error"
          className="warning-image"
        />
        <p className="warning-text">
          All the progress will be lost, if you reload during the quiz
        </p>
      </div>
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-bg-container">
        <Header />
        <div className="home-page-bg">
          {isLoading ? this.renderLoader() : this.renderHomePage()}
        </div>
      </div>
    )
  }
}
export default Home
