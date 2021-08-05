import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  SESSION_SUCCESS,
  SESSION_FAIL,
} from "./types";

import axios from "axios";

export const userMessage = (message) => async (dispatch) => {
  try {
    dispatch({ type: INPUT_SUCCESS, payload: message });
  } catch (error) {
    dispatch({ type: INPUT_FAIL });
  }
};

export const createSession = () => async (dispatch) => {
  try {
    const response = await axios.get("/session");
    dispatch({ type: SESSION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SESSION_FAIL });
  }
};
