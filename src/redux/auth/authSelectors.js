export const selectUser = (state) => state.auth.user;
export const selectUserName = (state) => state.auth.user.name;
export const selectToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefresh = (state) => state.auth.isRefresh;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectIsShowModals = (state) => state.auth.showModalTimeUsing;
