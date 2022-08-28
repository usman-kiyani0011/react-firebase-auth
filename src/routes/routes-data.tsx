import Admin from "../components/admin/admin";
import Login from "../components/authentication/login";
import Signup from "../components/authentication/sign-up";
import Editor from "../components/editor/editor";
import Home from "../components/home/home";
import Lounge from "../components/lounge/lounge";
import Unauthorized from "../components/unauthorized/unauthorized";

export const routesData = [
  { id: "1", path: "home", component: <Home /> },
  { id: "2", path: "login", component: <Login /> },
  { id: "3", path: "signup", component: <Signup /> },
  { id: "4", path: "editor", component: <Editor /> },
  { id: "5", path: "admin", component: <Admin /> },
  { id: "6", path: "launge", component: <Lounge /> },
  { id: "7", path: "unauthorized", component: <Unauthorized /> },
];
