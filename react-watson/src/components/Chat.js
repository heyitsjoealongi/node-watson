import React, { useState } from "react";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleClick = async (event) => {
    const code = event.keyCode || event.which;

    if (code === 13) {
      console.log(message);
      setMessage("");
    }
  };
  return (
    <>
      <section className="chat">
        <h1>Watson Chatbot</h1>
        <article>Chat Goes Here</article>
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

export default Chat;
