import styles from "../style/Home.module.css";

function UpdateDropdown() {

  const users = [
    {id : 1, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 2, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 3, name: "IU", userProfile : "/images/iu.jpg"},
    {id : 4, name: "IU", userProfile : "/images/iu.jpg"},
  ]

  const UpdateUser = ({user}) =>{
    return(
      <li>
          <img src={user.userProfile}></img>
          <p>{user.name}</p>
        </li>
    )
  }

  return (
    <>
      <ul className={styles.ud_drop}>
      {users.map((user) => (
        <UpdateUser key={user.id} user={user} />
      ))}
      </ul>
    </>
  );
}

export default UpdateDropdown;