
import styles from "./style/Chat.module.css"


export default function Chat() {
  
  
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
        
      </section>
    </>
  );

  

  };
