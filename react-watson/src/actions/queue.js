import {
  INPUT_SUCCESS,
  INPUT_FAIL,
  SESSION_SUCCESS,
  SESSION_FAIL,
  MESSAGE_SUCCESS,
  MESSAGE_FAIL,
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
    const response = await axios.get("/api/watson/session");
    dispatch({ type: SESSION_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: SESSION_FAIL });
  }
};

export const sendMessage = (message) => async (dispatch) => {
  try {
    const body = { input: message };
    const response = await axios.post("/api/watson/message", body);
    dispatch({
      type: MESSAGE_SUCCESS,
      payload: response.data.output.generic[0].text,
    });
  } catch (error) {
    dispatch({ type: MESSAGE_FAIL });
  }
};
