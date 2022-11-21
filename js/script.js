const colorbox1 = document.querySelector('.color-1');
const colorbox2 = document.querySelector('.color-2');
const colorbox3 = document.querySelector('.color-3');

const imagebox = document.querySelector('.img-box');
const profile = document.querySelector('.profile-img');
const colors = ['#0cf02e', '#f03d0c', '#f7c705'];


colorbox1.addEventListener('click', function(){
     imagebox.style.backgroundColor = colors[0];
     imagebox.style.borderRadius = '50%';
     profile.style.borderRadius = '50%';
})

colorbox2.addEventListener('click', function(){
     imagebox.style.backgroundColor = colors[1];
     imagebox.style.borderRadius = '50%';
     profile.style.borderRadius = '50%';
})

colorbox3.addEventListener('click', function(){
     imagebox.style.backgroundColor = colors[2];
     imagebox.style.borderRadius = '50%';
     profile.style.borderRadius = '50%';
})

