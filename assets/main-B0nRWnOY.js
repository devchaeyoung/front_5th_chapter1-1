(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const w=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:2,name:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다"},{id:3,name:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],u=()=>JSON.parse(localStorage.getItem("user")),S=u(),r={loginState:!!S,posts:w};function b(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" name="username" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" id="password" name="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
    </main>
  `}const f=t=>(window.location.hash?window.location.hash.slice(1)||"/":window.location.pathname.replace(x,"")||"/")===t,p=({loggedIn:t})=>{const n=t?`
          <li><a href="/profile" class=${f("/profile")?"text-blue-600":"text-gray-600"}>프로필</a></li>
          <li id="logout"><a href="#" class="text-gray-600">로그아웃</a></li>
          `:`
          <li><a href="/login" class=${f("/login")?"text-blue-600":"text-gray-600"}>로그인</a></li>
          `;return`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class=${f("/")?"text-blue-600":"text-gray-600"}>홈</a></li>
        ${n}
        </ul>
      </nav>
`},h=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,$=({id:t,name:n,createdAt:s,content:l})=>`
  <div class="bg-white rounded-lg shadow p-4" data-id="${t}">
   <div class="flex items-center mb-2">
     <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
     <div>
       <p class="font-bold">${n}</p>
       <p class="text-sm text-gray-500">${s}</p>
     </div>
   </div>
   <p>${l}</p>
   <div class="mt-2 flex justify-between text-gray-500">
     <button>좋아요</button>
     <button>댓글</button>
     <button>공유</button>
   </div>
  </div>`;function g(){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p({loggedIn:r.loginState})}
          <main class="p-4">
           ${r.loginState?`<div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
            </div>`:""}    
            <div class="space-y-4">
             ${r.posts.map($).join("")}
            </div>
          </main>
    
      ${h()}
      </div>
     </div>
    `}function L({Header:t,Footer:n}){const{username:s,bio:l,email:e}=u();return`
      <div class="bg-gray-100 min-h-screen flex justify-center">
        <div class="max-w-md w-full">
     ${t({loggedIn:!0})}
          <main class="p-4">
            <div class="bg-white p-8 rounded-lg shadow-md">
              <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
                내 프로필
              </h2>
              <form id="profile-form">
                <div class="mb-4">
                  <label
                    for="username"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >사용자 이름</label
                  >
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value="${s}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="email"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >이메일</label
                  >
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value="${e}"
                    class="w-full p-2 border rounded"
                  />
                </div>
                <div class="mb-6">
                  <label
                    for="bio"
                    class="block text-gray-700 text-sm font-bold mb-2"
                    >자기소개</label
                  >
                  <textarea
                    id="bio"
                    name="bio"
                    value="${l}"
                    rows="4"
                    class="w-full p-2 border rounded"
                  >
    ${l}</textarea
                  >
                </div>
                <button
                  type="submit"
                  class="w-full bg-blue-600 text-white p-2 rounded font-bold"
                >
                  프로필 업데이트
                </button>
              </form>
            </div>
          </main>
          ${n()}
        </div>
      </div>

    `}function P(){return`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
    </main>
  `}const E=location.hostname.includes("github.io"),x=E?"/front_5th_chapter1-1":"",i=document.getElementById("root"),v=()=>{const t=window.location.pathname.replace(x,"")||"/";return t==="/"?i.innerHTML=g():t==="/profile"?r.loginState?i.innerHTML=L({Header:p,Footer:h}):(m("/login"),i.innerHTML=b()):t==="/login"?r.loginState?i.innerHTML=g():(m("/"),i.innerHTML=b()):i.innerHTML=P()},m=t=>{history.pushState({},"",t),v()};window.addEventListener("popstate",()=>{c()});const c=()=>{const t=u();r.loginState=!!t,console.log("-----location.href----"),console.log(location.href),v(),document.querySelectorAll("a").forEach(e=>{e.addEventListener("click",o=>{o.preventDefault();const a=o.target.href.replace(location.origin,"");history.pushState(null,"",a),c()})});const n=document.getElementById("profile-form");n&&n.addEventListener("submit",e=>{e.preventDefault();const o=document.getElementById("username").value,a=document.getElementById("email").value,y=document.getElementById("bio").value,d=u();d.username=o,d.email=a,d.bio=y,localStorage.setItem("user",JSON.stringify(d)),c()});const s=document.getElementById("login-form");s&&s.addEventListener("submit",e=>{e.preventDefault(),I()});const l=document.getElementById("logout");l&&l.addEventListener("click",O)},I=()=>{const n={username:document.getElementById("username").value,email:"",bio:""};localStorage.setItem("user",JSON.stringify(n)),r.loginState=!0,m("/"),c()},O=()=>{localStorage.removeItem("user"),r.loginState=!1,m("/login"),c()};c();
