
const signinbtn=document.querySelector('.signin-btn');
const signupbtn=document.querySelector('.signup-btn');
const formBx=document.querySelector('.formbx');
const body= document.querySelector('body');

signupbtn.addEventListener('click', ()=>{
    formBx.classList.add('active');
    body.classList.add('active');
});

signinbtn.addEventListener('click', ()=>{
    formBx.classList.remove('active');
    body.classList.remove('active');
})