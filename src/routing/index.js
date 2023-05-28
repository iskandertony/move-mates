import WelcomePage from "../pages/welcome-page";
import Login from "../components/login";
import Register from "../components/register";
import Main from "../pages/main";
import Payment from "../pages/payment";
import ClientList from "../pages/clients";
import ClientDetails from "../pages/clients-details";
import Calendar from "../components/calendar";
export const routing = {
  welcomePage: {
    path: "/dashboard",
    element: <WelcomePage />, //
    protected: false,
    role: "all",
  },
  login: {
    path: "/login",
    element: <Login />, //
    protected: false,
    role: "all",
  },
  register: {
    path: "/register",
    element: <Register />, //
    protected: false,
    role: "all",
  },
  main: {
    path: "/main",
    element: <Main />, //
    protected: false,
    role: "all",
  },
  payment: {
    path: "/payment",
    element: <Payment />, //
    protected: false,
    role: "all",
  },
  client: {
    path: "/client",
    element: <ClientList />, //
    protected: false,
    role: "all",
  },
  clientDetails: {
    path: "/client/:id",
    element: <ClientDetails />, //
    protected: false,
    role: "all",
  },

  calendar: {
    path: "/calendar",
    element: <Calendar />, //
    protected: false,
    role: "all",
  },
};
