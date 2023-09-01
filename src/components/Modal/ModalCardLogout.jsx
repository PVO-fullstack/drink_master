import css from './ModalLogout.module.css';
import { useDispatch } from 'react-redux';
import { logOutUser } from '../../redux/auth/authOperations';

const ModalCardLogout = ({ active, onClickClose }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOutUser());
    // onClickClose(false);
  };

  return (
    <div>
      <p className={css.titleLogout}>Are you sure you want to log out?</p>
      <div className={css.btnsContainer}>
        <button className={css.logoutBtn} onClick={handleLogout}>
          Log out
        </button>
        <button className={css.cancelBtn} onClick={() => onClickClose(false)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ModalCardLogout;