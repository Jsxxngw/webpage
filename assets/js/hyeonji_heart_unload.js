let likeCount = 0;

// 하트 클릭 시 클릭 정보를 갱신하고 화면에 반영하는 함수
function incrementLikeCount() {
  likeCount++;
  // 화면에 클릭 정보 갱신
  const span = document.getElementById('likeCount');
  span.textContent = likeCount;
}

// 페이지 로드 시 저장된 클릭 정보를 초기화
window.addEventListener('load', () => {
  // LocalStorage에서 저장된 클릭 정보 가져오기
  const savedLikeCount = localStorage.getItem('likeCount');
  if (savedLikeCount) {
    likeCount = parseInt(savedLikeCount);
  }
  
  // 화면에 초기 클릭 정보 반영
  const span = document.getElementById('likeCount');
  span.textContent = likeCount;
});

// 페이지 unload 시 클릭 정보를 LocalStorage에 저장
window.addEventListener('unload', () => {
  localStorage.setItem('likeCount', likeCount.toString());
});