// تحقق من صحة نموذج المشاركة في المنتدى
document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.querySelector('.post-form form');

    if (postForm) {
        postForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const postTitle = document.getElementById('post-title').value;
            const postContent = document.getElementById('post-content').value;

            if (!name || !email || !postTitle || !postContent) {
                alert('يرجى ملء جميع الحقول.');
                event.preventDefault(); // منع إرسال النموذج
            }
        });
    }

    // تحقق من صحة نموذج الاتصال
    const contactForm = document.querySelector('form[action="/submit-contact"]');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('يرجى ملء جميع الحقول.');
                event.preventDefault(); // منع إرسال النموذج
            }
        });
    }
});