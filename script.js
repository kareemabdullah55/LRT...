// فتح المودال بناءً على الزر اللي اتضغط
document.querySelectorAll('.modal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden'; // منع تمرير الصفحة تحت المودال
    }
  });
});

// إغلاق المودال لما تضغط على زر الإغلاق (x)
document.querySelectorAll('.modal .close').forEach(closeBtn => {
  closeBtn.addEventListener('click', () => {
    const modal = closeBtn.closest('.modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // تفعيل التمرير مجددًا
  });
});

// إغلاق المودال لما تضغط في أي مكان خارج المحتوى
window.addEventListener('click', (event) => {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = 'none';
    document.body.style.overflow = 'auto'; // تفعيل التمرير مجددًا
  }
});

