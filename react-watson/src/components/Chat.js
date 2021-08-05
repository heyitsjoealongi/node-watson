import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";

import { userMessage, sendMessage } from "../actions/queue";

const Chat = ({ chat, userMessage, sendMessage }) => {
  const [message, setMessage] = useState("");
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [chat]);

  const handleClick = async (event) => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      console.log(message);
      userMessage(message);
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <>
      <section className="chat-box">
        <article className="chat-stream">
          <h1>Watson Chatbot</h1>
          {chat.length === 0
            ? ""
            : chat.map((message) => (
                <article className="{msg.type}">{message.message}</article>
              ))}
          <div ref={endOfMessages}></div>
        </article>
        <input
          className="chat-form"
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handleClick}
          value={message}
          placeholder="Enter Your Message"
        ></input>
      </section>
    </>
  );
};

const mapStateToProps = (state) => ({
  chat: state.queue.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);
