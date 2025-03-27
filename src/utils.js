export const user = JSON.parse(localStorage.getItem("user") || "null");

export const setUser = (user) => {
  return localStorage.setItem("user", JSON.stringify(user));
};
