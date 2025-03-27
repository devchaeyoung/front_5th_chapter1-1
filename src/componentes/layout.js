export const Footer = () => /* html */ `
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`;

export const Header = ({ loggedIn, isHash }) => {
  const nav = loggedIn
    ? /* html */ `
          <li><a href=${isHash ? "#/profile" : "/profile"} class=${location.pathname.includes("profile") ? "text-blue-600" : "text-gray-600"}>프로필</a></li>
          <li id="logout"><a href="#" class="text-gray-600">로그아웃</a></li>
          `
    : /* html */ `
          <li><a href=${isHash ? "#/login" : "/login"} class=${location.pathname.includes("login") ? "text-blue-600" : "text-gray-600"}>로그인</a></li>
          `;

  return /* html */ `
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href=${isHash ? "#" : "/"} class=${location.pathname === "/index.hash.html" || "" ? "text-blue-600" : "text-gray-600"}>홈</a></li>
        ${nav}
        </ul>
      </nav>
`;
};
