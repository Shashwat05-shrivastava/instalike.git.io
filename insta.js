const clickarea = document.querySelector('.image');
const clickcount = document.querySelector('.no-of-times-clicked');

let count=0;

const Show = (e) => {
   const hearts = document.createElement('i');
   hearts.classList.add('fa');
   hearts.classList.add('fa-heart');
   clickarea.appendChild(hearts);

   setTimeout(()=>{
      hearts.remove(); 
   },800);
}
clickarea.addEventListener('dblclick', (e)=>{
     clickcount.innerHTML= ++count;
     Show(e);
})