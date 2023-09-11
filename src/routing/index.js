import WelcomePage from "../pages/shared/welcome-page";
import Login from "../pages/shared/login";
import Register from "../pages/shared/register";
import Payment from "../pages/shared/payment";
import ClientList from "../pages/shared/users-list";
import ClientDetails from "../pages/client/clients-details";
import Schedule from "../pages/shared/schedule";
import Chat from "../pages/chat";
import Settings from "../pages/shared/settings";
import ResetPassword from "../pages/shared/password-reset";
import ValidatePassword from "../pages/shared/password-validate";
import ConfirmPassword from "../pages/shared/password-confirm";
import Notifications from "../pages/shared/notifications";
import ChatDetails from "../pages/chat-details";
import Profile from "../pages/shared/profile";
import Main from "../pages/main";
import AppointmentsBegin from "../components/appointments-begin";
import VideoCall from "../pages/video-call";
import TimetableWorkHours from "../pages/shared/schedule/timetable-work-hours";
import CoachDetails from "../pages/coach/coach-details";
import Specialization from "../pages/specialization";
import NewEventMentor from "../pages/shared/schedule/new-event";
import TimeTableChoseClient from "../pages/shared/schedule/timetable-chose-client";
import Reschedule from "../pages/reschedule";
import Qualification from "../pages/qualification";
import WorkHoursHoliday from "../pages/work-hours-holiday";
import NewEventClient from "../pages/client/new-event-client";
import TimeTableIndividualMentor from "../pages/shared/schedule/timetable-individual";
import TimeTableIndividualClient from "../pages/client/timetable-individual";
import TimetableWorkHoursCalendarMentor from "../pages/shared/schedule/titmetable-work-hours-calendar";
import TimetableWorkHoursCalendarClient from "../pages/client/titmetable-work-hours-calendar";
import Reservation from "../pages/client/reservation";
import TimeTableChoseGroupMentor from "../pages/shared/schedule/timetable-chose-group";
import TimeTableChoseGroupClient from "../pages/client/timetable-chose-group";
import TimeTableGroupClient from "../pages/client/timetable-group";
import TimeTableGroupMentor from "../pages/shared/schedule/timetable-group";
import PaymentDetails from "../pages/shared/payment-details";
import TestVideo from "../pages/test-video";


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

  CoachDetails: {
    path: "/coach/1", // TODO поменять на норм роут
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

  paymentDetail: {
    path: "/payment/1",
    element: <PaymentDetails />, //
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

  AppointmentsBegin: {
    path: "/appointments-begin",
    element: <AppointmentsBegin />, //
    protected: false,
    role: "all",
  },

  // AppointmentsAdd: {
  //   path: "/calendar",
  //   element: <AppointmentsAdd />, //
  //   protected: false,
  //   role: "all",
  // },

  VideoCall: {
    path: "/video-call",
    element: <VideoCall />, //
    protected: false,
    role: "all",
  },

  Specialization: {
    path: "/specialization",
    element: <Specialization />,
    protected: false,
    role: "all",
  },

  NewEventMentor: {
    path: "/mentor/calendar/event",
    element: <NewEventMentor />,
    protected: false,
    role: "all",
  },

  NewEventClient: {
    path: "/client/calendar/event",
    element: <NewEventClient />,
    protected: false,
    role: "all",
  },

  TimeTableIndividual: {
    path: "/mentor/specialization/individual",
    element: <TimeTableIndividualMentor />,
    protected: false,
    role: "all",
  },

  IndividualClient: {
    path: "/client/specialization/individual",
    element: <TimeTableIndividualClient />,
    protected: false,
    role: "all",
  },

  Reservation: {
    path: "/client/reservation",
    element: <Reservation />,
    protected: false,
    role: "all",
  },

  TimeTableChoseClient: {
    path: "/specialization/individual/chose-client",
    element: <TimeTableChoseClient />,
    protected: false,
    role: "all",
  },

  TimeTableGroupMentor: {
    path: "/mentor/specialization/group",
    element: <TimeTableGroupMentor />,
    protected: false,
    role: "all",
  },

  TimeTableGroupClient: {
    path: "/client/specialization/group",
    element: <TimeTableGroupClient />,
    protected: false,
    role: "all",
  },

  TimeTableChoseGroupMentor: {
    path: "/mentor/specialization/group/chose-client",
    element: <TimeTableChoseGroupMentor />,
    protected: false,
    role: "all",
  },

  TimeTableChoseGroupClient: {
    path: "/client/specialization/group/chose-client",
    element: <TimeTableChoseGroupClient />,
    protected: false,
    role: "all",
  },

  TimeTableWorkHours: {
    path: "/setting/profile/work-hours",
    element: <TimetableWorkHours />,
    protected: false,
    role: "all",
  },

  TimeTableWorkHoursCalendarMentor: {
    path: "/mentor/specialization/work-hours/calendar",
    element: <TimetableWorkHoursCalendarMentor />,
    protected: false,
    role: "all",
  },

  TimeTableWorkHoursCalendarClient: {
    path: "/client/specialization/work-hours/calendar",
    element: <TimetableWorkHoursCalendarClient />,
    protected: false,
    role: "all",
  },

  Reschedule: {
    path: "/appointments-begin/reschedule",
    element: <Reschedule />,
    protected: false,
    role: "all",
  },

  Qualification: {
    path: "/settings/qualification",
    element: <Qualification />,
    protected: false,
    role: "all",
  },

  Holiday: {
    path: "/setting/profile/work-hours/calendar",
    element: <WorkHoursHoliday />,
    protected: false,
    role: "all",
  },

  TestVideo: {
    path: "/test/video",
    element: <TestVideo />,
    protected: false,
    role: "all",
  },


};
