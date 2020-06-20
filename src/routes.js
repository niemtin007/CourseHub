// @material-ui/icons
import HomeIcon from "@material-ui/icons/Home";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
// core components/ui for App layout
import Dashboard from "./containers/Dashboard/Dashboard";
import Courses from "./containers/Courses/Courses";
import Auth from "./containers/Auth/Auth";
import CourseDetail from "./components/CourseList/CourseDetail/CourseDetail";

export const userRoutes = [
  {
    path: "/",
    name: "Dashboard",
    exact: true,
    component: Dashboard,
    icon: HomeIcon,
  },
  {
    path: "/courses",
    name: "Courses",
    exact: false,
    component: Courses,
    icon: ImportContactsIcon,
  },
];
