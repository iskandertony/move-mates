import WelcomePage from "../pages/welcome-page";
import Login from "../pages/login";
import Register from "../pages/register";
import Payment from "../pages/payment";
import ClientList from "../pages/client/clients";
import ClientDetails from "../pages/client/clients-details";
import Schedule from "../pages/schedule";
import Chat from "../pages/chat";
import Settings from "../pages/settings";
import ResetPassword from "../pages/password-reset";
import ValidatePassword from "../pages/password-validate";
import ConfirmPassword from "../pages/password-confirm";
import Notifications from "../pages/notifications";
import ChatDetails from "../pages/chat-details";
import Profile from "../pages/profile";
import CoachMain from "../pages/coach/coach-main";
import Main from "../pages/main";
import AppointmentsBegin from "../components/appointments-begin";
import VideoCall from "../pages/video-call";
import TimeTable from "../pages/timetable";
import TimeTableIndividual from "../pages/timetable-individual";
import TimeTableGroup from "../pages/timetable-group";
import TimetableWorkHours from "../pages/timetable-work-hours";
import TimetableWorkHoursCalendar from "../pages/titmetable-work-hours-calendar";
import AppointmentsAdd from "../pages/appointments-add";
import CoachDetails from "../pages/coach/coach-details";
import ClientMain from "../pages/client/clientMain";
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
  // CoachMain: {
  //   path: "/coach",
  //   element: <CoachMain />, //
  //   protected: false,
  //   role: "all",
  // },

  CoachDetails: {
    path: "/coach/1",      // TODO поменять на норм роут
    element: <CoachDetails />, //
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

  // ClientMain: {
  //   path: "/client",
  //   element: <ClientMain />, //
  //   protected: false,
  //   role: "all",
  // },

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

  AppointmentsBegin: {
    path: "/appointments-begin",
    element: <AppointmentsBegin />, //
    protected: false,
    role: "all",
  },

  AppointmentsAdd: {
    path: "/appointments-add",
    element: <AppointmentsAdd />, //
    protected: false,
    role: "all",
  },

  VideoCall: {
    path: "/video-call",
    element: <VideoCall />, //
    protected: false,
    role: "all",
  },

  TimeTable: {
    path: "/timetable",
    element: <TimeTable />,
    protected: false,
    role: "all",
  },

  TimeTableIndividual: {
    path: "/timetable/individual",
    element: <TimeTableIndividual />,
    protected: false,
    role: "all",
  },

  TimeTableGroup: {
    path: "/timetable/group",
    element: <TimeTableGroup />,
    protected: false,
    role: "all",
  },

  TimeTableWorkHours: {
    path: "/timetable/work-hours",
    element: <TimetableWorkHours />,
    protected: false,
    role: "all",
  },

  TimeTableWorkHoursCalendar: {
    path: "/timetable/work-hours/calendar",
    element: <TimetableWorkHoursCalendar />,
    protected: false,
    role: "all",
  },
};
