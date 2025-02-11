import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitErr: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})

    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitErr: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="input-label">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
          className="user-input"
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const passwordType = showPassword ? 'text' : 'password'

    return (
      <>
        <label htmlFor="password" className="input-label">
          PASSWORD
        </label>
        <input
          type={passwordType}
          id="passowrd"
          value={password}
          onChange={this.onChangePassword}
          className="user-input"
        />
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="checkbox"
            onChange={this.onClickShowPassword}
            className="checkbox-input"
          />
          <label htmlFor="checkbox" className="show-password-label">
            Show Password
          </label>
        </div>
      </>
    )
  }

  render() {
    const {showSubmitErr, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg-container">
        <form onSubmit={this.submitForm} className="form-container">
          <div className="logo-container">
            <img
              className="logo-img"
              src="https://res.cloudinary.com/df1uli235/image/upload/v1714979567/quiz_game_logo_zq8zsu.svg"
              alt="login website logo"
            />
            <p className="logo-text">NXT Quiz</p>
          </div>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitErr && <p className="err_msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default Login
