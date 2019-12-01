import React, { useReducer, useEffect } from "react";
import { debounce } from "@helpers";
import { AppContext, initialState, AppContextReducer } from "./appContext";
import {
  SET_MOBILE_SCREEN,
  UNSET_MOBILE_SCREEN,
  SET_PHONE_SCREEN,
  UNSET_PHONE_SCREEN,
} from "@config/constants";

const ContextProvider = props => {
  const [state, dispatch] = useReducer(AppContextReducer, initialState);

  useEffect(() => {
    initDeviceScreen();
    const rszEvent = window.addEventListener("resize", checkDeviceScreen);
    return () => {
      window.removeEventListener("resize", rszEvent);
    };
  }, []);

  function initDeviceScreen() {
    console.log(state);
    if (window.innerWidth < 1000) {
      console.log("stting");
      dispatch({ type: SET_MOBILE_SCREEN });
    }
    if (window.innerWidth < 600) {
      dispatch({ type: SET_PHONE_SCREEN });
    }
    console.log(state);
  }
  function checkDeviceScreen() {
    const isMobile = window.innerWidth < 1000;
    const isPhone = window.innerWidth < 600;
    /* 
    if (isMobile && !state.isMobile) {
      dispatch({type: SET_MOBILE_SCREEN});
      console.log(state)
    }else if (!isMobile && state.isMobile){
      console.log("cenoura")
      dispatch({type: UNSET_MOBILE_SCREEN});
    }

    if (isPhone && !state.isPhone) {
      dispatch({type: SET_PHONE_SCREEN});
    }else if (!isPhone && state.isPhone){
      dispatch({type: UNSET_PHONE_SCREEN});
    } */
  }

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
