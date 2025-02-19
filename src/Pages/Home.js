import React from "react";
import { Switch, Route, useRouteMatch, Link } from "react-router-dom";

import Profile from "../Pages/Profile";
import MyLibrary from "../Pages/MyLibrary";
import AddBook from "../Pages/AddBook";
import BookVerif from "../Pages/BookVerif";

import HomeContainer from "../Component/HomeContainer";
import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Detail from "../Component/Detail";

export default function Home() {
  const match = useRouteMatch();

  return (<div className="container-fluid mt-4">
    <div className="row">
      <div className="col-sm-3" id="fixed">
        <center>
          <Link to={`${match.url}`} style={{ textDecoration: "none" }}>
            <Header />
          </Link>
          <Sidebar />
        </center>
      </div>
      <div className="col-sm-9 mt-2">
        <div className="container">
          <Switch>
            <Route exact path={match.path} ><HomeContainer /></Route>
            <Route path={`${match.path}/Profile`} component={Profile} />
            <Route path={`${match.path}/MyLibrary`} component={MyLibrary} />
            <Route path={`${match.path}/AddBook`} component={AddBook} />
            <Route path={`${match.path}/Detail/:id`} component={Detail} />
            <Route path={`${match.path}/BookVerif`} component={BookVerif} />
          </Switch>
        </div>
      </div>
    </div>
  </div>
  );
}
