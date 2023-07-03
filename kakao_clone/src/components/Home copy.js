// import {
//   HashRouter as Router,
//   Routes,
//   Route,
//   Link, NavLink
// } from "react-router-dom";
// import React, { useState } from 'react';
// import styles from "./style/Home.module.css"


// export default function Home() {
//   const [mtview, setMtView] = useState(false);
//   const [bdview, setBdView] = useState(false);
//   const [updateview, setUpdateView] = useState(false);
//   const [plusview, setPlusView] = useState(false);
//   const [channelview, setCannelView] = useState(false);

//   return (
//     <>
//       {/* 타이틀 */}
//       <header className={styles.title}>
//         <div className={styles.textY_center}>
//           <h1>친구</h1>
//         </div>
//         <div className={styles.button}>
//           <a><img src="/images/search.png"></img></a>
//           <a><img src="/images/user_add.png"></img></a>
//           <a><img src="/images/music.png"></img></a>
//           <a><img src="/images/setting2.png"></img></a>
//         </div>
//       </header>
//       {/* 메인 틀 */}
//       <section className={styles.section}>
//         {/* 메인 프로필 */}
//         <section className={styles.main}>
//           <div className={styles.main_ps}>
//             <div className={styles.main_flex}>
//               <img src="/images/iu.jpg" />
//               <div className={styles.main_text}>
//                 <div>아이유</div>
//                 <div>밤편지</div>
//               </div>
//             </div>
//             <button>상태메시지 올리기</button>
//           </div>
//           <div className={styles.solid}></div>
//         </section>

//         {/* 내 멀티프로필 */}
//         <section className={styles.mt_profile}>
//           <nav>
//             <p>내 멀티프로필</p>
//             <div onClick={() => { setMtView(!mtview) }}>
//               {mtview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
//             </div>
//           </nav>
//           {mtview && <MultiDropdown />}
//         </section>

//         {/* 생일인 친구 */}
//         <section className={styles.bd_profile}>
//           <nav>
//             <p>생일인 친구</p>
//             <div onClick={() => { setBdView(!bdview) }}>
//               {bdview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
//             </div>
//           </nav>
//           {bdview && <BirthdayDropdown />}
//         </section>

//         {/* 업데이트한 친구 */}
//         <section className={styles.ud_profile}>
//           <nav>
//             <p>업데이트한 친구</p>
//             <div onClick={() => { setUpdateView(!updateview) }}>
//               {updateview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
//             </div>
//           </nav>
//           {updateview && <UpdateDropdown />}
//         </section>

//         {/* 추천친구 */}
//         <section className={styles.pl_profile}>
//           <nav>
//             <p>추천친구</p>
//             <div onClick={() => { setPlusView(!plusview) }}>
//               {plusview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
//             </div>
//           </nav>
//           {plusview && <PlusDropdown />}
//         </section>

//         {/* 채널 */}
//         <section className={styles.cn_profile}>
//           <nav>
//             <p>채널</p>
//             <div onClick={() => { setCannelView(!channelview) }}>
//               {channelview ? <img src="/images/down.png"></img> : <img src="/images/up.png"></img>}
//             </div>
//           </nav>
//           {channelview && <ChannelDropdown />}
//         </section>

//         {/* 친구 */}
//         <section>

//         </section>

//       </section>
//     </>
//   );
// }

// function MultiDropdown() {

//   return (
//     <>
//       <ul className={styles.mt_drop}>
//         <li>
//           <img src="/images/iu.jpg"></img>
//           <p>iu</p>
//         </li>
//         <li>
//           <img src="/images/iu.jpg"></img>
//           <p>iu</p>
//         </li>
//       </ul>
//     </>
//   );
// }

// function BirthdayDropdown() {

//   return (
//     <>
//       <ul className={styles.bd_drop}>
//         <li>
//           <nav>
//             <img src="/images/iu.jpg"></img>
//             <div>
//               <p>iu</p>
//               <p>오늘 7월 3일</p>
//             </div>
//           </nav>
//           <button>
//             <p>선물하기</p>
//             <img src="/images/box.png"></img>
//           </button>
//         </li>
//         <li>
//           <nav>
//             <img src="/images/iu.jpg"></img>
//             <div>
//               <p>iu</p>
//               <p>오늘 7월 3일</p>
//             </div>
//           </nav>
//           <button>
//             <p>선물하기</p>
//             <img src="/images/box.png"></img>
//           </button>
//         </li>
//       </ul>
//     </>
//   );
// }

// function UpdateDropdown() {

//   return (
//     <>
//       <ul className={styles.ud_drop}>
//         <li>
//           <img src="/images/iu.jpg"></img>
//           <p>iu</p>
//         </li>
//         <li>
//           <img src="/images/iu.jpg"></img>
//           <p>iu</p>
//         </li>
//       </ul>
//     </>
//   );
// }

// function PlusDropdown() {

//   return (
//     <>
//       <ul className={styles.pl_drop}>
//         <li>
//           <nav>
//             <img src="/images/iu.jpg"></img>
//             <div>
//               <p>새로운 친구를 만나보세요!</p>
//             </div>
//           </nav>
//           <button>100 &#62;</button>
//         </li>
//       </ul>
//     </>
//   );
// }

// function ChannelDropdown() {

//   return (
//     <>
//       <ul className={styles.cn_drop}>
//         <li>
//           <nav>
//             <img src="/images/iu.jpg"></img>
//             <div>
//               <p>새로운 친구를 만나보세요!</p>
//             </div>
//           </nav>
//           <button>51 &#62;</button>
//         </li>
//       </ul>
//       <Channel />
//     </>
//   );
// }

// function Channel() {
//   return (
//     <>
//       <ul className={styles.cn_add}>
//         <li>
//           <div className={styles.cn_position}>
//             <img src="/images/iu.jpg"></img>
//             <p>감자나라</p>
//             <p>이렇게 맛있는 감자는 없었다!</p>
//             <button>채널추가</button>
//           </div>
//         </li>
//         <li>
//           <div className={styles.cn_position}>
//             <img src="/images/iu.jpg"></img>
//             <p>수박나라</p>
//             <p>이렇게 맛있는 수박은 없었다!</p>
//             <button>채널추가</button>
//           </div>
//         </li>
//         <li>
//           <div className={styles.cn_position}>
//             <img src="/images/iu.jpg"></img>
//             <p>수박나라</p>
//             <p>이렇게 맛있는 수박은 없었다!</p>
//             <button>채널추가</button>
//           </div>
//         </li>
//       </ul>
//     </>
//   )
// }









