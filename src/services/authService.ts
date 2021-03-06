export const getAccessToken = (): string | null => {
  const token = window.localStorage.getItem("accessToken");
  return token;
};
export const setAccessToken = (token: string): void => {
  window.localStorage.setItem("accessToken", token);
};
export const getRefreshToken = (): string | null => {
  const token = window.localStorage.getItem("refreshToken");
  return token;
};
export const setRefreshToken = (token: string): void => {
  window.localStorage.setItem("refreshToken", token);
};

export const setAuthType = (authType: string): void => {
  window.localStorage.setItem("authType", authType);
};

export const getAuthType = (): string | null => {
  const authType = window.localStorage.getItem("authType");
  return authType;
};

export const signout = (): void => {
  window.localStorage.removeItem("authType");
  window.localStorage.removeItem("accessToken");
  window.localStorage.removeItem("refreshToken");
  window.localStorage.removeItem("persist:user");
};
