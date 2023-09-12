import { autorun, makeAutoObservable, reaction, runInAction } from "mobx";
import authStore from "./auth";
import moment from "moment/moment";
import { getAppointments } from "../api";

function createAppointmentsStore() {
  const today = moment();
  let store = {
    appointments: [],
    usersLoading: false,

    async fetchAppointments(page = 0) {
      try {
        if (authStore?.token) {
          runInAction(() => {
            store.usersLoading = true;
          });

          const filter = {
            from: moment(today).toISOString(),
            size: 20,
            page,
          };

          const response = await getAppointments(filter);
          runInAction(() => {
            if (page === 0) {
              store.appointments = response?.content;
            }
          });
          if (response?.content.length > 18 && page === 0) {
            await store.fetchAppointments(page + 1);
          }
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      } finally {
        runInAction(() => {
          store.usersLoading = false;
        });
      }
    },
  };

  autorun(() => {
    if (authStore?.token) return store.fetchAppointments();
  });

  makeAutoObservable(store);
  return store;
}

const listAppointments = createAppointmentsStore();

export default listAppointments;
