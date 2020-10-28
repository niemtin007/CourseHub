import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./store/actions";

import UserLayout from "./hoc/Layout/UserLayout";

import Dashboard from "./containers/Dashboard/Dashboard";
import Courses from "./containers/Courses/Courses";
import MyCourses from "./containers/Courses/MyCourses";
import Auth from "./containers/Auth/Auth";
import CourseDetail from "./components/CourseList/CourseDetail/CourseDetail";
import Logout from "./containers/Auth/Logout/Logout";
import UsersManager from "./containers/UsersManager/UsersManager";
import CoursesManager from "./containers/CoursesManager/CoursesManager";
import PageNotFound from "./containers/PageNotFound/PageNotFound";
import About from "./containers/Auth/About/About";

const RouteUser = ({ Component, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (
        <UserLayout>
          <Component />
        </UserLayout>
      )}
    />
  );
};

const RouteAdmin = ({ Component, isAdmin, ...props }) => {
  return (
    <Route
      {...props}
      render={() =>
        isAdmin ? (
          <UserLayout>
            <Component />
          </UserLayout>
        ) : (
          <PageNotFound />
        )
      }
    />
  );
};

const App = ({ onTryAutoSignup }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user && user.maLoaiNguoiDung === "GV";

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {/* With Layout */}
        <RouteUser path="/" exact Component={Dashboard} />
        <RouteUser path="/about" exact Component={About} />
        <RouteUser path="/courses" exact Component={Courses} />
        <RouteUser path="/my-courses" exact Component={MyCourses} />
        <RouteUser path="/courses/:id" Component={CourseDetail} />
        <RouteUser path="/logout" Component={Logout} />
        <RouteAdmin
          path="/users-management"
          Component={UsersManager}
          isAdmin={isAdmin}
        />
        <RouteAdmin
          path="/courses-management"
          Component={CoursesManager}
          isAdmin={isAdmin}
        />
        {/* Without Layout */}
        <Route path="/sign-in" component={Auth} />
        <Route path="/sign-up" component={Auth} />
        {/* Page Not Found */}
        <Route component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
