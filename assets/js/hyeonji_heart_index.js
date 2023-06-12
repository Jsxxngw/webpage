const hearts = {
  1: { count: 0 },
  2: { count: 0 },
  3: { count: 0 },
  4: { count: 0 },
  5: { count: 0 },
  6: { count: 0 }
};
    
    function incrementLikeCount(id) {
      const heart = hearts[id];
      heart.count++;
    
      const span = document.getElementById(`likeCount_${id}`);
      span.textContent = heart.count;
    }
    
    window.addEventListener('load', () => {
      const savedLikeCounts = localStorage.getItem('likeCounts');
      if (savedLikeCounts) {
        const parsedLikeCounts = JSON.parse(savedLikeCounts);
        Object.assign(hearts, parsedLikeCounts);
      }
    
      Object.entries(hearts).forEach(([id, heart]) => {
        const span = document.getElementById(`likeCount_${id}`);
        span.textContent = heart.count;
      });
    });
    
    window.addEventListener('unload', () => {
      const likeCountsJSON = JSON.stringify(hearts);
      localStorage.setItem('likeCounts', likeCountsJSON);
    }); 