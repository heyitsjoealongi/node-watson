import React, { useState } from "react";
import { connect } from "react-redux";

import { userMessage } from "../actions/queue";

const Chat = ({ chat, userMessage }) => {
  const [message, setMessage] = useState("");

  const handleClick = async (event) => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      setMessage("");
    }
  };
  return (
    <>
      <section className="chat">
        <h1>Watson Chatbot</h1>
        {chat.length === 0
          ? ""
          : chat.map((message) => (
              <article className="{msg.type}">{message.message}</article>
            ))}
        <input
          id="chatBox"
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handleClick}
          value={message}
        ></input>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  chat: state.queue.messages,
});

export default connect(mapStateToProps, { userMessage })(Chat);
