import React, { useReducer, useEffect, useCallback, useRef } from "react";
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
  let latestState = useRef(state);

  useEffect(() => {
    latestState.current = state;
  });

  useEffect(() => {
    function handleResize() {
      const isMobile = window.innerWidth < 1000;
      const { current } = latestState;
      console.log(isMobile, current.isMobile);
      if (isMobile && !current.isMobile) {
        console.log("setou para mobile");
        dispatch({ type: SET_MOBILE_SCREEN });
      } else if (!isMobile && current.isMobile) {
        console.log("steou para desk");
        dispatch({ type: UNSET_MOBILE_SCREEN });
      }
    }

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
