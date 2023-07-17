import styles from "./style/Chat.module.css"
import { Link } from "react-router-dom";

import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export default function Chat() {

  const sendMessage = () => {
    socket.emit("send_message", { message: 'Hello' });

    io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);
      socket.on("send_message", (data) => {
        console.log(data);
        socket.broadcast.emit("receive_message", data);
      });
    });

    useEffect(() => {
      socket.on("receive_message", (data) => {
        setMessageRecived(data.message);
      });
    }, [socket]);

    io.on("connection", (socket) => {
      console.log(`User Connected: ${socket.id}`);
      socket.on("join_room", (data) => {
        socket.join(data);
      });
      socket.on("send_message", (data) => {
        console.log(data);
        // socket.broadcast.emit("receive_message", data); // 1 대 다수
        socket.to(data.room).emit("receive_message", data); // 방 하나만
      });
    }); // 연결확인

    const [room, setRoom] = useState("");

    const JoinRoom = (e) => {
      if (room !== "") {
        socket.emit("join_room", room);
      }
    };

  };
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
        {sendMessage}
        <div>
          <input type="text" placeholder="Room Number,,," onChange={(e) => setRoom(e.target.value)} />
          <button onClick={JoinRoom}>Join Room</button>
        </div>
      </section>
    </>
  );
}