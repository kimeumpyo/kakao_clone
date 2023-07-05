import {
  HashRouter as Router,
  Routes,
  Route,
  Link, NavLink
} from "react-router-dom";
import React, { useState } from 'react';
import styles from "./style/Home.module.css"


export default function Home() {
  const [mtview, setMtView] = useState(false);
  const [bdview, setBdView] = useState(false);
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
          <nav>
            <p>내 멀티프로필 2</p>
            <div onClick={() => { setMtView(!mtview) }}>
              {mtview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!mtview && <MultiDropdown />}
        </section>

        {/* 생일인 친구 */}
        <section className={styles.bd_profile}>
          <nav>
            <p>생일인 친구</p>
            <div onClick={() => { setBdView(!bdview) }}>
              {bdview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!bdview && <BirthdayDropdown />}
        </section>

        {/* 업데이트한 친구 */}
        <section className={styles.ud_profile}>
          <nav>
            <p>업데이트한 친구 2</p>
            <div onClick={() => { setUpdateView(!updateview) }}>
              {updateview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!updateview && <UpdateDropdown />}
        </section>

        {/* 추천친구 */}
        <section className={styles.pl_profile}>
          <nav>
            <p>추천친구</p>
            <div onClick={() => { setPlusView(!plusview) }}>
              {plusview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!plusview && <PlusDropdown />}
        </section>

        {/* 채널 */}
        <section className={styles.cn_profile}>
          <nav>
            <p>채널</p>
            <div onClick={() => { setCannelView(!channelview) }}>
              {channelview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!channelview && <ChannelDropdown />}
        </section>

        {/* 친구 */}
        <section className={styles.friends_profile}>
          <nav>
            <p>친구 4</p>
            <div onClick={() => { setFriendsView(!friendsview) }}>
              {friendsview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
            </div>
          </nav>
          {!friendsview && <FriendDropdown />}
        </section>
      </section>
    </>
  );
}

function MultiDropdown() {

  return (
    <>
      <ul className={styles.mt_drop}>
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

function BirthdayDropdown() {
  let today = new Date();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = "오늘 " + month  + '월 ' + day + '일';

  return (
    <>
      <ul className={styles.bd_drop}>
        <li>
          <nav>
            <img src="/images/iu.jpg"></img>
            <div>
              <p>iu</p>
              <p>{dateString}</p>
            </div>
          </nav>
          <button>
            <p>선물하기</p>
            <img src="/images/box.png"></img>
          </button>
        </li>
        <li>
          <nav>
            <img src="/images/profile.png"></img>
            <div>
              <p>라이언</p>
              <p>{dateString}</p>
            </div>
          </nav>
          <button>
            <p>선물하기</p>
            <img src="/images/box.png"></img>
          </button>
        </li>
      </ul>
    </>
  );
}

  

function UpdateDropdown() {

  return (
    <>
      <ul className={styles.ud_drop}>
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

function PlusDropdown() {

  return (
    <>
      <ul className={styles.pl_drop}>
        <li>
          <nav>
            <img src="/images/newfriend.jpg"></img>
            <div>
              <p>새로운 친구를 만나보세요!</p>
            </div>
          </nav>
          <button>100 &#62;</button>
        </li>
      </ul>
    </>
  );
}

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

function Channel() {
  // 드래그 상태 저장을 위한 state
  // isDragging이 true이면 드래그 중인 상태
  const [isDragging, setIsDragging] = useState(false);

  // 시작 지점, 드래그 중인 위치 저장을 위한 state
  const [startX, setStartX] = useState(0);
  const [dragX, setDragX] = useState(0);

  console.log("startX", startX)
  console.log("dragX", dragX)


  const handleMouseDown = (e) => {
    // 이미지에서 마우스 클릭(터치) 이벤트가 발생한 경우
    if (e.target.className === styles.cn_position) {
      setIsDragging(true);
      // 시작 지점 좌표 계산
      setStartX(e.clientX || e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      // 드래그 중인 위치 계산
      const x = e.clientX || e.touches[0].clientX;

      setDragX(x - startX);
      console.log("x", x)
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // 드래그 상태 해제시, 드래그 중인 위치 정보 초기화
    setDragX(dragX);
  };

  return (
    
      <div className={styles.img_ss}>
        <ul 
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className={styles.cn_add}
          style={{ userSelect: 'none', position: 'relative' }} // 드래그 시 셀렉션 방지, 상위 컨테이너에 position 속성 필요
        >
          {/* 드래그 중인 위치에 따라 이미지 이동 */}
          <li style={{ userSelect: 'none',  marginLeft: dragX }}> 
            <div className={styles.cn_position} >
              <img src="/images/watermelon.jpg"></img>
              <p>수박나라</p>
              <p>이렇게 맛있는 수박은 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/apple.jpg"></img>
              <p>사과나라</p>
              <p>이렇게 맛있는 사과는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/banana.jpg"></img>
              <p>바나나나라</p>
              <p>이렇게 맛있는 바나나는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/mango.jpg"></img>
              <p>망고나라</p>
              <p>이렇게 맛있는 망고는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/kiwi.jpg"></img>
              <p>키위나라</p>
              <p>이렇게 맛있는 키위는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/grape.jpg"></img>
              <p>포도나라</p>
              <p>이렇게 맛있는 포도는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
          <li>
            <div className={styles.cn_position} >
              <img src="/images/cherry.jpg"></img>
              <p>체리나라</p>
              <p>이렇게 맛있는 체리는 없었다!</p>
              <button>채널추가</button>
            </div>
          </li>
        </ul>
      </div>
  );
}

function FriendDropdown() {

  return (
    <>
      <ul className={styles.friends_drop}>
        <li>
          <nav>
            <img src="/images/iu.jpg"></img>
            <div>
              <p>iu</p>
              <p>야~호~</p>
            </div>
          </nav>
          <button>
            <p>Blueming - 아이유</p>
            <p>▷</p>
          </button>
        </li>
        <li>
          <nav>
            <img src="/images/iu.jpg"></img>
            <div>
              <p>iu</p>
              <p>운동!</p>
            </div>
          </nav>
          <button>
            <p>좋은 날 - 아이유</p>
            <p>▷</p>
          </button>
        </li>
        <li>
          <nav>
            <img src="/images/iu.jpg"></img>
            <div>
              <p>iu</p>
              <p>여름..너무덥다</p>
            </div>
          </nav>
        </li>
        <li>
          <nav>
            <img src="/images/iu.jpg"></img>
            <div>
              <p>iu</p>
              <p>아이스크림~먹고싶어 엉엉</p>
            </div>
          </nav>
          <button>
            <p>밤편지 - 아이유</p>
            <p>▷</p>
          </button>
        </li>
      </ul>
    </>
  );
}









