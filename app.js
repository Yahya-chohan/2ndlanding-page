document.querySelectorAll('.qa-box').forEach(box => {
    box.querySelector('.question').addEventListener('click', () => {
      box.classList.toggle('open');  // Toggle the open class
    });
  });