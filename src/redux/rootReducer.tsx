import { combineReducers } from "redux";
import aboutReducer from "./expertRedux/expertReducer";
import serviceReducer from "./serviceRedux/serviceReducer";
import contactReducer from "./contactRedux/contactReducer";
import feedbackReducer from "./feedbackRedux/feedbackReducer";
import loginReducer from "./loginRedux/loginReducer";
import welcomeReducer from "./welcomeRedux/welcomeReducer";
import jobReducer from "./jobRedux/jobReducer";

export const rootReducer = combineReducers({ aboutReducer, serviceReducer, contactReducer, feedbackReducer, loginReducer, welcomeReducer, jobReducer })

export type RootReducerType = ReturnType<typeof rootReducer>

