import {
  HashRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";
import React, { useState } from 'react';
import styles from "./style/Home.module.css"

import MultiDropdown from "./Homes/MultiDropdown"
import BirthdayDropdown from "./Homes/BirthdayDropdown"
import UpdateDropdown from "./Homes/UpdateDropdown"
import PlusDropdown from "./Homes/PlusDropdown"
import ChannelDropdown from "./Homes/ChannelDropdown"
import FriendDropdown from "./Homes/FriendDropdown"

import DropdownSection from "../EventResponse/DropdownSection"


export default function Home() {
  const [multiview, setMultiView] = useState(false);
  const [birthdayview, setBirthDayView] = useState(false);
  const [updateview, setUpdateView] = useState(false);
  const [plusview, setPlusView] = useState(false);
  const [channelview, setCannelView] = useState(false);
  const [friendsview, setFriendsView] = useState(false);

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
          <DropdownSection
            title="내 멀티프로필 2"
            viewState={multiview}
            toggleView={setMultiView}
          >
            <MultiDropdown />
          </DropdownSection>
        </section>

        {/* 생일인 친구 */}
        <section className={styles.bd_profile}>
          <DropdownSection
            title="생일인 친구"
            viewState={birthdayview}
            setViewState={setBirthDayView}
          >
            <BirthdayDropdown />
          </DropdownSection>
        </section>

        {/* 업데이트한 친구 */}
        <section className={styles.ud_profile}>
          <DropdownSection
            title="업데이트한 친구 2"
            viewState={updateview}
            setViewState={setUpdateView}
          >
            <UpdateDropdown />
          </DropdownSection>
        </section>

        {/* 추천친구 */}
        <section className={styles.pl_profile}>
          <DropdownSection
            title="추천친구"
            viewState={plusview}
            setViewState={setPlusView}
          >
            <PlusDropdown />
          </DropdownSection>
        </section>

        {/* 채널 */}
        <section className={styles.cn_profile}>
          <DropdownSection
            title="채널"
            viewState={channelview}
            setViewState={setCannelView}
          >
            <ChannelDropdown />
          </DropdownSection>
        </section>

        {/* 친구 */}
        <section className={styles.friends_profile}>
          <DropdownSection
            title="친구 4"
            viewState={friendsview}
            setViewState={setFriendsView}
          >
            <FriendDropdown />
          </DropdownSection>
        </section>
      </section>
    </>
  );
}