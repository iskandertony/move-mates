import { makeAutoObservable, runInAction } from "mobx";

import { createWorkTime } from "../api";

function createWorkTimeStore() {
  let store = {
    workTime: [],
    usersLoading: false,

    async fetchWorkTime(payload) {
      try {
        const response = await createWorkTime(payload);
        if (response && response?.status === 200) {
          // console.log("status 200 ,what response?", response);
        }
      } catch (error) {
        console.log("Error while trying to work time:", error);
      } finally {
        runInAction(() => {
          store.usersLoading = false;
        });
      }
    },
  };

  makeAutoObservable(store);
  return store;
}

const CreateWorkTime = createWorkTimeStore();

export default CreateWorkTime;
