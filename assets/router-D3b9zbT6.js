(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const x=[{id:1,name:"홍길동",createdAt:"5분 전",content:"오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요"},{id:2,name:"김철수",createdAt:"15분 전",content:"새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다"},{id:3,name:"이영희",createdAt:"30분 전",content:"오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?"},{id:4,name:"박민수",createdAt:"1시간 전",content:"주말에 등산 가실 분 계신가요? 함께 가요!"},{id:5,name:"정수연",createdAt:"2시간 전",content:"새로 나온 영화 재미있대요. 같이 보러 갈 사람?"}],f=()=>JSON.parse(localStorage.getItem("user")),h=f(),n={loginState:!!h,posts:x};function u(){return`
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
  `}const d=t=>(window.location.hash?window.location.hash.slice(1)||"/":window.location.pathname.replace(c,"")||"/")===t,p=({loggedIn:t})=>`
      <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class=${d("/")?"text-blue-600 font-bold":"text-gray-600"}>홈</a></li>
        ${t?`
          <li><a href="/profile" class=${d("/profile")?"text-blue-600 font-bold":"text-gray-600"}>프로필</a></li>
          <li id="logout"><a href="#" class="text-gray-600">로그아웃</a></li>
          `:`
          <li><a href="/login" class=${d("/login")?"text-blue-600 font-bold":"text-gray-600"}>로그인</a></li>
          `}
        </ul>
      </nav>
`,g=()=>`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
`,y=({id:t,name:o,createdAt:r,content:l})=>`
  <div class="bg-white rounded-lg shadow p-4" data-id="${t}">
   <div class="flex items-center mb-2">
     <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
     <div>
       <p class="font-bold">${o}</p>
       <p class="text-sm text-gray-500">${r}</p>
     </div>
   </div>
   <p>${l}</p>
   <div class="mt-2 flex justify-between text-gray-500">
     <button>좋아요</button>
     <button>댓글</button>
     <button>공유</button>
   </div>
  </div>`;function m(){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p({loggedIn:n.loginState})}
          <main class="p-4">
           ${n.loginState?`<div class="mb-4 bg-white rounded-lg shadow p-4">
              <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
              <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
            </div>`:""}    
            <div class="space-y-4">
             ${n.posts.map(y).join("")}
            </div>
          </main>
    
      ${g()}
      </div>
     </div>
    `}function v({Header:t,Footer:o}){const{username:r,bio:l,email:e}=f();return`
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
                    value="${r}"
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
          ${o()}
        </div>
      </div>

    `}function w(){return`
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
  `}const c="/front_5th_chapter1-1",a=document.getElementById("root"),$=()=>{const t=window.location.pathname.replace(c,"")||"/";return t==="/"?a.innerHTML=m():t==="/profile"?n.loginState?a.innerHTML=v({Header:p,Footer:g}):(b("/login"),a.innerHTML=u()):t==="/login"?n.loginState?(b("/"),a.innerHTML=m()):a.innerHTML=u():a.innerHTML=w()},b=t=>{history.pushState({},"",`${c}${t}`),$()};export{g as F,m as H,u as L,w as N,v as P,p as a,f as g,b as n,$ as r,n as s};
