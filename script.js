document.querySelectorAll('.faq-question').forEach(function(question) {
  question.addEventListener('click', function() {
    var item = this.closest('.faq-item');
    var isOpen = item.classList.contains('is-open');

    document.querySelectorAll('.faq-item.is-open').forEach(function(openItem) {
      openItem.classList.remove('is-open');
    });

    if (!isOpen) {
      item.classList.add('is-open');
    }
  });
});
