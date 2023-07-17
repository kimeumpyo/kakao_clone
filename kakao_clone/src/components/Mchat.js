import styles from "./style/MultiChat.module.css"
import { Link } from "react-router-dom";
export default function Mchat() {
  return (
    <>
      {/* 타이틀 */}
      <header className={styles.title}>
          <div className={styles.textY_center}>
            <h1>오픈채팅</h1>
          </div>
          <div className={styles.button}>
            <a><img src="/images/search.png"></img></a>
            <a><img src="/images/chatPlus.png"></img></a>
            <a><img src="/images/setting2.png"></img></a>
          </div>
        </header>
      <section>

      </section>
    </>
  );
}