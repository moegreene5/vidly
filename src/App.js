import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movie from "./Components/movies";
import NavBar from "./Components/navbar";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import NotFound from "./Components/notfound";
import MovieForm from "./Components/moviesform";
import LoginForm from "./Components/loginForm";
import RegisterFrom from "./Components/register";
import Logout from "./Components/logout";
import { getCurrentUser } from "./services/authService";
import ProtectedRoutes from "./Components/common/protectedRoutes";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={user} />
        <main className="container ">
          <Switch>
            <Route path="/register" component={RegisterFrom} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoutes path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movie {...props} user={this.state.user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
