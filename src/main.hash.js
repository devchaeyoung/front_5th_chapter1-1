import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { setUser, user } from "./utils";
import { state } from "./store";

export const App = () => {
  const currentHash = location.hash || null;

  state.isHash = location.pathname.includes("/index.hash.html");

  if (currentHash === "#/login") {
    if (state.loginState) {
      location.hash = "#/";
      return HomePage({ ...state });
    }
    return LoginPage();
  }
  if (currentHash === "#/profile") {
    if (!user) return LoginPage();
    return ProfilePage({ ...user, isHash: state.isHash });
  }
  if (currentHash === null || currentHash === "#") {
    return HomePage({ ...state });
  }
  return NotFoundPage();
};

window.addEventListener("hash", () => {
  hashRender();
});

export const hashRender = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  state.loginState = !!user;
  const root = document.getElementById("root");
  root.innerHTML = App();

  document.querySelectorAll("a").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const newHash = e.target.href.replace(
        `${location.origin}/index.hash.html`,
        "",
      );
      location.hash = newHash;
      hashRender();
    });
  });

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
  const profileForm = document.getElementById("profile-form");
  if (profileForm) {
    profileForm.addEventListener("submit", updateProfile);
  }
};

const login = () => {
  const username = document.getElementById("username").value;
  const user = {
    username: username,
    email: "",
    bio: "",
  };
  setUser(user);
  state.loginState = true;
  location.hash = "#";
  return hashRender();
};

const logout = () => {
  localStorage.removeItem("user");
  state.loginState = false;
  location.hash = "#/login";
  return hashRender();
};

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
  hashRender();
};

hashRender();
