import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";
import SignInSignUpPage from "./pages/sign-in-sign-out/sign-in-sign-out.component.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

const HatsPage = () => (
  <div>
    <h1> HATS PAGE</h1>
  </div>
);
const TopicsList = () => {
  return (
    <div>
      <h1>TOPIC DETAIL PAGE</h1>
    </div>
  );
};

const TopicDetail = props => (
  <div>
    <button onclick={() => props.history.push("/hats")}> Hats </button>
    <h1>TOPIC LIST PAGE</h1>
  </div>
);

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  unsubscribeFromAuth = null;
  componenetDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
        console.log(this.state);
      } else {
        this.setState({ currentUser: userAuth });
      }

      //createUserProfileDocument(user);
      //this.setState({ currentUser: user });
      //console.log(user);
    });
  }
  componenentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />

          <Route exact path="/topics/:topicId" component={TopicDetail} />
          <Route exact path="/topicslist" component={TopicsList} />
        </Switch>
      </div>
    );
  }
}

export default App;
