import styles from "../style/Home.module.css";

function MultiDropdown() {

  const users = [
    {id : 1, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 2, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 3, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 4, name: "IU", userProfile : "/images/iu.jpg"},
  ]

  const MultiUser = ({user}) =>{
    return(
      <li>
          <img src={user.userProfile}></img>
          <p>{user.name}</p>
        </li>
    )
  }

  return (
    <>
      <ul className={styles.mt_drop}>
      {users.map((user) => (
        <MultiUser key={user.id} user={user} />
      ))}
      </ul>
    </>
  );
}
export default MultiDropdown;