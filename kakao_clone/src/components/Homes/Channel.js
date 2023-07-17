// import { useState, useCallback, useRef, useEffect } from "react";
import { useState } from "react";

import styles from "../style/Home.module.css";



function Channel() {

  const channels = [
    { id: 1, name: "수박나라", comment: "이렇게 맛있는 수박은 없었다", channelImg: "/images/watermelon.jpg" },
    { id: 2, name: "사과나라", comment: "이렇게 맛있는 사과는 없었다", channelImg: "/images/apple.jpg" },
    { id: 3, name: "감귤나라", comment: "이렇게 맛있는 감귤은 없었다", channelImg: "/images/orange.jpg" },
    { id: 4, name: "망고나라", comment: "이렇게 맛있는 망고는 없었다", channelImg: "/images/mango.jpg" },
    { id: 5, name: "키위나라", comment: "이렇게 맛있는 키위는 없었다", channelImg: "/images/kiwi.jpg" },
    { id: 6, name: "포도나라", comment: "이렇게 맛있는 포도는 없었다", channelImg: "/images/grape.jpg" },
    { id: 7, name: "체리나라", comment: "이렇게 맛있는 체리는 없었다", channelImg: "/images/cherry.jpg" },
  ]

  const ChannelUser = ({ channel }) => {
    return (
      <li>
        <div className={styles.ch_position} >
          <img src={channel.channelImg} alt="Channel Image"></img>
          <p>{channel.name}</p>
          <p>{channel.comment}</p>
          <button>채널추가</button>
        </div>
      </li>
    )
  }

  // const [listX, setListX] = useState(0);
  // const [startX, setStartX] = useState(0);
  // const [nowX, setNowX] = useState(0);
  // const [endX, setEndX] = useState(0);

  // console.log("listX",listX)
  // console.log("startX",startX)
  // console.log("nowX",nowX)
  // console.log("endX",endX)

  // const getClientX = (e) => {
  //   const isTouches = e.touches ? true : false;
  //   console.log("isTouches",isTouches)
  //   return isTouches ? e.touches[0].clientX : e.clientX;
  // };

  // const getTranslateX = () => {
  //   console.log("listRef",listRef)
  //   return parseInt(getComputedStyle(listRef.current).transform.split(/[^\-0-9]+/g)[5]);
  // };

  // const setTranslateX = useCallback((x) => {
  //   listRef.current.style.transform = `translateX(${x}px)`;
  // }, []);

  // const listRef = useRef(null);

  // const bindEvents = useCallback(() => {
  //   listRef.current.addEventListener('mousedown', onScrollStart);
  //   listRef.current.addEventListener('touchstart', onScrollStart);
  //   listRef.current.addEventListener('click', onClick);
  // }, []);

  // useEffect(() => {
  //   bindEvents();
  //   return () => {
  //     listRef.current.removeEventListener('mousedown', onScrollStart);
  //     listRef.current.removeEventListener('touchstart', onScrollStart);
  //     listRef.current.removeEventListener('mousemove', onScrollMove);
  //     listRef.current.removeEventListener('touchmove', onScrollMove);
  //     listRef.current.removeEventListener('mouseup', onScrollEnd);
  //     listRef.current.removeEventListener('touchend', onScrollEnd);
  //     listRef.current.removeEventListener('click', onClick);
  //   };
  // }, [bindEvents]);

  // const onScrollStart = useCallback(
  //   (e) => {
  //     setStartX(getClientX(e));
  //     window.addEventListener('mousemove', onScrollMove);
  //     window.addEventListener('touchmove', onScrollMove);
  //     window.addEventListener('mouseup', onScrollEnd);
  //     window.addEventListener('touchend', onScrollEnd);
  //   },
  //   [setStartX]
  // );

  // const onScrollMove = useCallback(
  //   (e) => {
  //     setNowX(getClientX(e));
  //     setTranslateX(listX + nowX - startX);
  //   },
  //   [listX, nowX, startX, setTranslateX]
  // );

  // const onScrollEnd = useCallback(
  //   (e) => {
  //     setEndX(getClientX(e));
  //     const currentListX = getTranslateX();
  //     if (currentListX > 0) {
  //       setTranslateX(0);
  //       listRef.current.style.transition = `all 0.3s ease`;
  //       setListX(0);
  //     } else if (currentListX < listRef.current.clientWidth - listRef.current.scrollWidth) {
  //       setTranslateX(listRef.current.clientWidth - listRef.current.scrollWidth);
  //       listRef.current.style.transition = `all 0.3s ease`;
  //       setListX(listRef.current.clientWidth - listRef.current.scrollWidth);
  //     }
  //     window.removeEventListener('mousemove', onScrollMove);
  //     window.removeEventListener('touchmove', onScrollMove);
  //     window.removeEventListener('mouseup', onScrollEnd);
  //     window.removeEventListener('touchend', onScrollEnd);
  //     setTimeout(() => {
  //       bindEvents();
  //       listRef.current.style.transition = '';
  //     }, 300);
  //   },
  //   [bindEvents, setTranslateX]
  // );

  // const onClick = useCallback(
  //   (e) => {
  //     if (startX - endX !== 0) {
  //       e.preventDefault();
  //     }
  //   },
  //   [startX, endX]
  // );


  return (
    <>
      <div className={styles.img_ss}>
        {/* <ul className={styles.ch_add} ref={listRef}> */}
        <ul className={styles.ch_add}>
          {channels.map((channel) => (
            <ChannelUser key={channel.id} channel={channel} />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Channel;
