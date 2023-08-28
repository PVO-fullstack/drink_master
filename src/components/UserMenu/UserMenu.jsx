import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUserName } from "../../redux/auth/authSelectors";

const UserMenu = () => {
  const userName = useSelector(selectUserName);

  return (
    <div className={css.userMenu}>
      <img
        src="/images/SVG/user2.svg"
        alt=""
        className={css.userMenuImg}
        width={44}
        height={44}
      ></img>
      <p className={css.userMenuName}>{userName ? userName : "Name"}</p>
      <button className={css.userMenuBtn}>
        <img
          src="/images/SVG/align-justify.svg"
          alt=""
          className={css.userMenuImg}
          width={32}
          height={32}
        ></img>
      </button>
    </div>
  );
};

export default UserMenu;
