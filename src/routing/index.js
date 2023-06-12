import WelcomePage from "../pages/welcome-page";
import Login from "../components/login";
import Register from "../components/register";
import Payment from "../pages/payment";
import ClientList from "../pages/clients";
import ClientDetails from "../pages/clients-details";
import Schedule from "../pages/schedule";
import Chat from "../pages/chat";
import Settings from "../pages/settings";
import ResetPassword from "../pages/password-reset";
import ValidatePassword from "../pages/password-validate";
import ConfirmPassword from "../pages/password-confirm";
import Notifications from "../pages/notifications";
import ChatDetails from "../pages/chat-details";
import Profile from "../pages/profile";
import CoachMain from "../pages/coach-main";
import Main from "../pages/main";
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
  CoachMain: {
    path: "/coach",
    element: <CoachMain />, //
    protected: false,
    role: "all",
  },
  Main: {
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

  Schedule: {
    path: "/calendar",
    element: <Schedule />, //
    protected: false,
    role: "all",
  },

  Settings: {
    path: "/settings",
    element: <Settings />, //
    protected: false,
    role: "all",
  },

  SettingsProfile: {
    path: "/settings/profile",
    element: <Profile />,
    protected: false,
    role: "all",
  },

  Chat: {
    path: "/chat",
    element: <Chat />, //
    protected: false,
    role: "all",
  },
  chatDetails: {
    path: "/chat/:id",
    element: <ChatDetails />, //
    protected: false,
    role: "all",
  },
  Reset: {
    path: "/accounts/password/reset",
    element: <ResetPassword />, //
    protected: false,
    role: "all",
  },

  Validate: {
    path: "/accounts/password/validate",
    element: <ValidatePassword />, //
    protected: false,
    role: "all",
  },

  Confirm: {
    path: "/accounts/password/confirm",
    element: <ConfirmPassword />, //
    protected: false,
    role: "all",
  },

  Notifications: {
    path: "/notifications",
    element: <Notifications />, //
    protected: false,
    role: "all",
  },
};
