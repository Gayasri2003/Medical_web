document.getElementById('toggle-button').addEventListener('click', function () {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});
// search button
document.getElementById('search-toggle').addEventListener('click', function () {
  const searchForm = document.getElementById('search-form');
  if (searchForm.style.display === 'none' || searchForm.style.display === '') {
    searchForm.style.display = 'flex';
  } else {
    searchForm.style.display = 'none';
  }
});

document.getElementById('search-toggle').addEventListener('click', function () {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const content = document.body.textContent.toLowerCase();

  if (searchInput && content.includes(searchInput)) {
    alert(`We found "${searchInput}" on the page.`);
  }
  else{alert('item not in the page'); }
});

// live chat
const chatButton = document.getElementById('chatButton');
const liveChatWindow = document.getElementById('liveChatWindow');
const closeButton = document.getElementById('closeChatWindow');

chatButton.addEventListener('click', () => {
    if (liveChatWindow.style.display === 'none' || liveChatWindow.style.display === '') {
        liveChatWindow.style.display = 'block'; // Show the chat window
    } else {
        liveChatWindow.style.display = 'none'; // Hide the chat window
    }
});

closeButton.addEventListener('click', () => {
    liveChatWindow.style.display = 'none';
});
