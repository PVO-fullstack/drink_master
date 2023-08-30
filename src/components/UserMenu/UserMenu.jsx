import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUser } from "../../redux/auth/authSelectors";
import UserDefaultSVG from "../ComponentsSVG/UserDefaultSVG";

const UserMenu = () => {
  const { name, avatarURL } = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      {avatarURL ? <img
        src={avatarURL}
        alt="Avatar image"
        className={css.userMenuImg}
        width={44}
        height={44}
      ></img> : <UserDefaultSVG className={`userMenuImg`} fill={"#F3F3F3"} />}

      <p className={css.userMenuName}>{name ? name : "Name"}</p>
    </div>
  );
};

export default UserMenu;
