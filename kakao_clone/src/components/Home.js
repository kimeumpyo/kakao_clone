import {
  HashRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";

import styles from "./style/Home.module.css"

export default function Home() {
  return (
    <>
      <section className={styles.main}>
        <div className={styles.textY_center}>
          <h1>친구</h1>
        </div>
        <div className={styles.button}>
          <a><img src="/images/search.png"></img></a>
          <a><img src="/images/user_add.png"></img></a>
          <a><img src="/images/music.png"></img></a>
          <a><img src="/images/setting2.png"></img></a>
        </div>
      </section>
    </>
  );
}