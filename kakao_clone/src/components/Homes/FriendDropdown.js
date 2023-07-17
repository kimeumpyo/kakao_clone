import styles from "../style/Home.module.css";

function FriendDropdown() {

  const users = [
    {id : 1, name: "IU", userProfile : "/images/iu.jpg", comment: "야~호~", playmusic: "Blueming - 아이유"},
    {id : 2, name: "IU", userProfile : "/images/iu.jpg", comment: "운동!", playmusic: "좋은 날 - 아이유"},
    {id : 3, name: "IU", userProfile : "/images/iu.jpg", comment: "여름..너무덥다", playmusic: "좋은 날 - 아이유"},
    {id : 4, name: "IU", userProfile : "/images/iu.jpg", comment: "아이스크림~먹고싶어 엉엉", playmusic: "밤편지 - 아이유"},
  ];

  const FriendUser = ({user}) => {
    return(
      <li>
          <nav>
            <img src={user.userProfile}></img>
            <div>
              <p>{user.name}</p>
              <p>{user.comment}</p>
            </div>
          </nav>
          <button>
            <p>{user.playmusic}</p>
            <p>▷</p>
          </button>
        </li>
    )
  }

  return (
    <>
      <ul className={styles.friends_drop}>
      {users.map((user) => (
        <FriendUser key={user.id} user={user} />
      ))}
      </ul>
    </>
  );
}
export default FriendDropdown;