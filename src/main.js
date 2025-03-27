import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";

import { setUser, user } from "./utils";
import { state } from "./store";

export const App = () => {
  state.isHash = location.pathname.includes("/index.hash.html");
  const currentUrl = location.href.replace(location.origin, "");
  state.loginState = !!user;

  if (currentUrl === "/login") {
    if (state.loginState) {
      location.replace("/");
      return HomePage({ ...state });
    }
    return LoginPage();
  }
  if (currentUrl === "/profile") {
    if (!user) return LoginPage();
    return ProfilePage({ ...user });
  }
  if (currentUrl === "/") {
    return HomePage({ ...state });
  }
  return NotFoundPage();
};

window.addEventListener("popstate", () => {
  render();
});

const render = () => {
  state.loginState = !!user;

  const root = document.getElementById("root");
  root.innerHTML = App();

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newPathName = e.target.href.replace(location.origin, "");
      history.pushState(null, "", newPathName);
      render();
    });
  });

  const profileForm = document.getElementById("profile-form");

  if (profileForm) {
    profileForm.addEventListener("submit", updateProfile);
  }

  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      login();
    });
  }

  const logoutButton = document.getElementById("logout");
  if (logoutButton) {
    logoutButton.addEventListener("click", logout);
  }
};

export const login = () => {
  const username = document.getElementById("username").value;
  const user = {
    username: username,
    email: "",
    bio: "",
  };
  setUser(user);
  state.loginState = true;

  history.pushState(null, "", "/");
  render();
};

export const logout = () => {
  localStorage.removeItem("user");
  state.loginState = false;

  history.pushState(null, "", "/login");
  render();
};

render();

const updateProfile = (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const bio = document.getElementById("bio").value;
  const user = JSON.parse(localStorage.getItem("user"));
  user.username = username;
  user.email = email;
  user.bio = bio;
  setUser();
  render();
};
