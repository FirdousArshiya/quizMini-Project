import {Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import GameResultsRoute from './components/GameResultsRoute'
import GameReportRoute from './components/GameReportRoute'
import QuizGameRoute from './components/QuizGameRoute'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/quiz-game" component={QuizGameRoute} />
    <ProtectedRoute exact path="/game-results" component={GameResultsRoute} />
    <ProtectedRoute exact path="/game-report" component={GameReportRoute} />
    <Route exact path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
