/* script.js - small helpers for interactions */
document.addEventListener('DOMContentLoaded', ()=> {
  // set active nav link
  const links = document.querySelectorAll('.nav-links a');
  const file = location.pathname.split('/').pop() || 'index.html';
  links.forEach(a => {
    if(a.getAttribute('href') === file) a.classList.add('active');
  });

  // simple form demo
  const form = document.querySelector('#contactForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Thank you — message received (demo). Replace action to send real messages.');
      form.reset();
    });
  }
});
