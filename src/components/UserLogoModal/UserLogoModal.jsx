import style from "./UserLogoModal.module.scss";
import { createPortal } from "react-dom";
import editSVG from "/images/SVG/edit.svg";
import { useDispatch } from "react-redux";
import { logOutUser } from "../../redux/auth/authOperations";

export const UserLogoModal = ({ close, showUserInfo }) => {
  const dispatch = useDispatch();

  const showUser = () => {
    showUserInfo();
    close();
  };

  const logqOut = () => {
    dispatch(logOutUser());
  };

  return (
    <>
      <div className={style.backdrop}>
        <div className={style.modal}>
          <div className={style.btnConteiner}>
            <button onClick={showUser} className={style.edit} type="button">
              Edit profile
              <img className={style.edit_swg} src={editSVG} alt="edit" />
            </button>
            <button onClick={logqOut} className={style.btn} type="button">
              Log out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
