const express = require("express");
const router = express.Router();

const AssistantV2 = require("ibm-watson/assistant/v2");
const { IamAuthenticator } = require("ibm-watson/auth");

const authenticator = new IamAuthenticator({
  apikey: process.env.WATSON_ASSISTANT_APIKEY,
});

const assistant = new AssistantV2({
  version: "2019-02-08",
  authenticator: authenticator,
  url: process.env.WATSON_ASSISTANT_URL,
});

router.get("/session", async (req, res) => {
  try {
    const session = await assistant.createSession({
      assistantId: process.env.WATSON_ASSISTANT_ID,
    });
    res.json(session["result"]);
  } catch (err) {
    res.send("There was an error processing your request");
    console.log(err);
  }
});

module.exports = router;
