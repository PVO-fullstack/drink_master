import { useSelector } from "react-redux";
import css from "./UserMenu.module.scss";
import { selectUser } from "../../redux/auth/authSelectors";

const UserMenu = () => {
  const { name, avatarURL } = useSelector(selectUser);

  return (
    <div className={css.userMenu}>
      <img
        src={avatarURL ? avatarURL : "/images/SVG/align-justify.svg"}
        alt="Avatar image"
        className={css.userMenuImg}
        width={44}
        height={44}
      ></img>
      <p className={css.userMenuName}>{name ? name : "Name"}</p>
    </div>
  );
};

export default UserMenu;
