import { createStore } from "redux";
import { rootReducer } from "./state/MyAppsState";

export const store = createStore(rootReducer);
