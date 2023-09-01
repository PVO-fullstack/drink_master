import { useSelector } from 'react-redux';

import {selectUser, selectToken , selectIsLoggedIn, selectIsRefresh } from '../redux/auth/authSelectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefresh);
  const userData = useSelector(selectUser);
  const ReduxToken = useSelector(selectToken);

  return {
    isLoggedIn,
    isRefreshing,
    userData,
    ReduxToken,
  };
};

export default useAuth;