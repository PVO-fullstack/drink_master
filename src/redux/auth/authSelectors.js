export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefresh;

const authSelectors = {
    selectUser,
    selectUserName,
    selectToken,
    selectIsLoggedIn,
    selectIsRefresh,
}

export default authSelectors;
