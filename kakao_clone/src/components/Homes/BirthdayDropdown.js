import styles from "../style/Home.module.css"

function BirthdayDropdown() {
  let today = new Date();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = "오늘 " + month + '월 ' + day + '일';

  const users = [
    {id : 1, name : "IU", userProfile : "/images/iu.jpg" },
    {id : 2, name : "라이언", userProfile : "/images/profile.png" }
  ];

  const BirthdayUser = ({user}) => {
    return(
      <li>
          <nav>
            <img src={user.userProfile} alt={user.name}></img>
            <div>
              <p>{user.name}</p>
              <p>{dateString}</p>
            </div>
          </nav>
          <button>
            <p>선물하기</p>
            <img src="/images/box.png" alt="선물 상자"></img>
          </button>
        </li>
    )
  }

  return (
    <ul className={styles.bd_drop}>
      {users.map((user) => (
        <BirthdayUser key={user.id} user={user} />
      ))}
    </ul>
  );
}


export default BirthdayDropdown;


{/* <>
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
    </> */}