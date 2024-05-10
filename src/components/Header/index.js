import "./index.css";

function Header({ title }) {
  return (
    <div className={"header"}>
      <div className={"header-title"}>{title}</div>
      <div className={"header-options"}>
        <button>more</button>
        <button>help</button>
        <button>notification</button>
        <button>profile</button>
      </div>
    </div>
  );
}

export default Header;
