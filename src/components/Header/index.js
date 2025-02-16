import {Link, withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <div className="main-bg">
      <div className="items-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/df1uli235/image/upload/v1714979567/quiz_game_logo_zq8zsu.svg"
              alt="website logo"
              className="home-website-logo"
            />
          </Link>
          <p className="logo-text">NXT Quiz</p>
        </div>
        <button
          type="button"
          className="logout-button-lg"
          onClick={onClickLogout}
        >
          Logout
        </button>

        <button
          type="button"
          className="logout-button-sm"
          onClick={onClickLogout}
          aria-label="Logout"
        >
          <FiLogOut className="logout-icon-sm" />
        </button>
      </div>
    </div>
  )
}
export default withRouter(Header)
