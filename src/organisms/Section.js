import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/Signup";
import Feedback from "../pages/user/Feedback";
import History from "../pages/user/History";
import ManageEvent from "../pages/admin/ManageEvent";
import EventForm from "../pages/admin/EventForm";
import ManageFeedback from "../pages/admin/ManageFeedback";
import Detail from "../pages/Detail/DetailEvent";
import { Admin, User } from "../Auth";
import PageNotFound from "../pages/PageNotFound";

const Section = () => {
  const [user] = useContext(UserContext);
  const LoginRoute = ({ user, ...props }) =>
    user ? <Route {...props} /> : <Redirect to="/home" />;

  return (
    <div className="section">
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />

        {user && (
          <>
            {/* login route */}
            {user.role == "guest" && (
              <>
                <LoginRoute exact path="/login" user={user} component={Login} />
                <LoginRoute
                  exact
                  path="/signup"
                  user={user}
                  component={SignUp}
                />
              </>
            )}
            {user.role == "user" && (
              <>
                {/* user route */}
                <Route
                  exact
                  path="/feedback"
                  user={user}
                  component={Feedback}
                />
                <Route exact path="/history" user={user} component={History} />
                <Route
                  exact
                  path="/detailevent"
                  user={user}
                  component={Detail}
                />
                {/* not found */}
              </>
            )}
            {user.role == "admin" && (
              <>
                {/* admin route */}
                <Route
                  exact
                  path="/manageevent"
                  user={user}
                  component={ManageEvent}
                />
                <Route
                  exact
                  path="/editevent"
                  user={user}
                  component={EventForm}
                />
                <Route
                  exact
                  path="/managefeedback"
                  user={user}
                  component={ManageFeedback}
                />
                {/* not found */}
              </>
            )}
          </>
        )}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};
export default Section;
