function incrementLikeCount(heart) {
  const span = heart.querySelector('span');
  const count = parseInt(span.textContent);
  span.textContent = count + 1;
}