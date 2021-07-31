const express = require("express");
const router = express.Router();

const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const assistant = new AssistantV2({
  version: "2021-06-14",
  authenticator: new IamAuthenticator({
    apikey: process.env.WATSON_ASSISTANT_APIKEY,
  }),
  serviceUrl: process.env.WATSON_ASSISTANT_URL,
});

router.get("/session", async (request, response) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });
    response.json(session["result"]);
  } catch (error) {
    response.send("There was an error processing your request");
    console.log(error);
  }
});

router.post("/message", async (request, response) => {
  payload = {
    assistantId: process.env.WATSON_ASSISTANT_ID,
    sessionId: request.headers.session_id,
    input: {
      message_type: "text",
      text: request.body.input,
    },
  };
  try {
    const message = await assistant.message(payload);
    response.json(message["result"]);
  } catch (error) {
    response.send("There was an error processing your request");
    console.log(error);
  }
});

module.exports = router;
