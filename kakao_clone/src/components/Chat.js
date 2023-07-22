
import styles from "./style/Chat.module.css"

import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");



export default function Chat() {

  const [room, setRoom] = useState("");

  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);


  return (
    <>
      {/* 타이틀 */}
      <header className={styles.title}>
        <div className={styles.textY_center}>
          <h1>채팅</h1>
        </div>
        <div className={styles.button}>
          <a><img src="/images/search.png"></img></a>
          <a><img src="/images/chatPlus.png"></img></a>
          <a><img src="/images/setting2.png"></img></a>
        </div>
      </header>
      <section>
        <div className="App">
          <input
            placeholder="Room Number..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}> Join Room</button><br />
          <input
            placeholder="Message..."
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          />
          <button onClick={sendMessage}> Send Message</button>
          <h1> Message:</h1>
          {messageReceived}
        </div>
      </section>
    </>
  );



};
