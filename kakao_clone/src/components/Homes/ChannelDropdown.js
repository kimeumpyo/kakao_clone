import Channel from "./Channel"

import styles from "../style/Home.module.css";


function ChannelDropdown() {

  return (
    <>
      <ul className={styles.cn_drop}>
        <li>
          <nav>
            <img src="/images/channel.png"></img>
            <div>
              <p>채널</p>
            </div>
          </nav>
          <button>51 &#62;</button>
        </li>
      </ul>
      <Channel />
      <p id={styles.endtext}>카카오톡에서 제공하는 채널 광고입니다</p>
    </>
  );
}
export default ChannelDropdown;

