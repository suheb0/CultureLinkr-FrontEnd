const Message = document.querySelector('.success-message')
const Form = document.getElementById('contactForm')

Form.addEventListener('submit', function(e) {
    e.preventDefault();
    Message.classList.add('show') 
    this.reset();
});