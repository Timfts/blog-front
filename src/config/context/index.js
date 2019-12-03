import React, { createContext, useReducer, useEffect, useRef } from "react";
import { debounce } from "@helpers";
import { AppContextReducer } from "./reducer";
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

const ContextProvider = props => {
  const [state, dispatch] = useReducer(AppContextReducer, initialState);
  let latestState = useRef(state);

  useEffect(() => {
    latestState.current = state;
  });

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 1000;
      const isPhone = window.innerWidth < 600;
      const { current } = latestState;
      if (isMobile && !current.isMobile) {
        console.log("mobile breakpoint");
        dispatch({ type: SET_MOBILE_SCREEN });
      } else if (!isMobile && current.isMobile) {
        console.log("leave mobile breakpoint");
        dispatch({ type: UNSET_MOBILE_SCREEN });
      }

      if (isPhone && !current.isPhone) {
        dispatch({ type: SET_PHONE_SCREEN });
        console.log("Phone screen breakpoint");
      } else if (!isPhone && current.isPhone) {
        dispatch({ type: UNSET_PHONE_SCREEN });
        console.log("Leave phone breakpoint");
      }
    }

    handleResize();

    const rszEvent = window.addEventListener("resize", debounce(handleResize));
    return () => {
      window.removeEventListener("resize", rszEvent);
    };
  }, []);

  function checkState() {
    console.log(state);
  }

  return (
    <AppContext.Provider value={{ ...state, checkState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
