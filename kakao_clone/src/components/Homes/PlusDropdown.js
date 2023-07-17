import styles from "../style/Home.module.css";

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

export default PlusDropdown;