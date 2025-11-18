// Small client-side enhancements
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(){
      // show small alert so user knows the browser will open their email client
      alert('Your email client will open so you can send the message. Replace mailto: in the form action to receive emails directly to your inbox.');
    });
  }
});
