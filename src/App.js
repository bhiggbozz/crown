import React from "react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/header.component.jsx";

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

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />

        <Route exact path="/topics/:topicId" component={TopicDetail} />
        <Route exact path="/topicslist" component={TopicsList} />
      </Switch>
    </div>
  );
}

export default App;
