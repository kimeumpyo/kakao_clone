import styles from "../components/style/Home.module.css"

const DropdownSection = ({ title, viewState, toggleView, children}) => {
  return (
    <>
      <nav>
        <p>{title}</p>
        <div onClick={() => toggleView(!viewState)}>
          {viewState ? (
            <img src="/images/down.png" alt="collapse" />
          ) : (
            <img src="/images/up.png" alt="expand" />
          )}
        </div>
      </nav>
      {!viewState && children}
    </>
  );
};

export default DropdownSection;