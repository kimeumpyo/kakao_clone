import {
  HashRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";
import React, { useState } from 'react';
import styles from "./style/Home.module.css"


export default function Home() {
  const [view, setView] = useState(false);

  return (
    <>
      {/* 타이틀 */}
      <header className={styles.title}>
        <div className={styles.textY_center}>
          <h1>친구</h1>
        </div>
        <div className={styles.button}>
          <a><img src="/images/search.png"></img></a>
          <a><img src="/images/user_add.png"></img></a>
          <a><img src="/images/music.png"></img></a>
          <a><img src="/images/setting2.png"></img></a>
        </div>
      </header>
      {/* 메인 틀 */}
      <section className={styles.section}>
        {/* 메인 프로필 */}
        <section className={styles.main}>
          <div className={styles.main_ps}>
            <div className={styles.main_flex}>
              <img src="/images/iu.jpg" />
              <div className={styles.main_text}>
                <div>아이유</div>
                <div>밤편지</div>
              </div>
            </div>
            <button>상태메시지 올리기</button>
          </div>
          <div className={styles.solid}></div>
        </section>

        {/* 내 멀티프로필 */}
        <section className={styles.mt_profile}>
          <nav>
            <p>내 멀티프로필</p>
            <div onClick={() => { setView(!view) }}>
              {view ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          
            {view && <Dropdown />}
          
        </section>

        {/* 생일인 친구 */}


        {/* 추천친구 */}
        <section>

        </section>

        {/* 채널 */}
        <section>

        </section>

        {/* 친구 */}
        <section>

        </section>

      </section>
    </>
  );
}

function Dropdown() {

  return (
    <>
      <ul className={styles.drop_flex}>
        <li>
          <img src="/images/iu.jpg"></img>
          <p>iu</p>
        </li>
        <li>
          <img src="/images/iu.jpg"></img>
          <p>iu</p>
        </li>
      </ul>
    </>
  );
}







