import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import { MOCK_POSTS } from "./mockPosts";

export const state = {
  loginState: false,
  posts: MOCK_POSTS,
};

const App = () => {
  const currentUrl = location.href.replace(location.origin, "");
  const user = JSON.parse(localStorage.getItem("user") || "null");
  state.loginState = !!user;

  if (currentUrl === "/login" || currentUrl === "/#login") {
    if (state.loginState) {
      return HomePage({ ...state });
    }
    return LoginPage();
  }
  if (currentUrl === "/profile" || currentUrl === "/#profile") {
    if (!user) return LoginPage();
    return ProfilePage({ ...user });
  }
  if (currentUrl === "/" || currentUrl === "/#") {
    return HomePage({ ...state });
  }
  return NotFoundPage();
};

window.addEventListener("popstate", () => {
  render();
});

const render = () => {
  const user = JSON.parse(localStorage.getItem("user") || "null");
  state.loginState = !!user;

  document.getElementById("root").innerHTML = App();

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
    profileForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const bio = document.getElementById("bio").value;
      const user = JSON.parse(localStorage.getItem("user"));
      user.username = username;
      user.email = email;
      user.bio = bio;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
      render();
    });
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

const login = () => {
  const username = document.getElementById("username").value;
  const user = {
    username: username,
    email: "",
    bio: "",
  };
  localStorage.setItem("user", JSON.stringify(user));

  state.loginState = true;

  history.pushState(null, "", "/");
  render();
};

const logout = () => {
  localStorage.removeItem("user");

  state.loginState = false;

  history.pushState(null, "", "/login");
  render();
};

render();
