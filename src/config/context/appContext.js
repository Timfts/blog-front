import { createContext } from "react";

import {
  SET_MOBILE_SCREEN,
  UNSET_MOBILE_SCREEN,
  SET_PHONE_SCREEN,
  UNSET_PHONE_SCREEN,
} from "@config/constants";

export const initialState = {
  isMobile: false,
  isPhone: false,
};

export const AppContext = createContext(initialState);

export function AppContextReducer(state, action) {
  switch (action.type) {
    case SET_MOBILE_SCREEN:
      console.log("ste");
      return {
        ...state,
        isMobile: true,
      };
    case UNSET_MOBILE_SCREEN:
      return {
        ...state,
        isMobile: false,
      };
    case SET_PHONE_SCREEN:
      return {
        ...state,
        isPhone: true,
      };
    case UNSET_PHONE_SCREEN:
      return {
        ...state,
        isPhone: false,
      };
  }
}
