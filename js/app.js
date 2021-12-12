console.log("test works well!🎯");
const cards = document.querySelectorAll('.extended-card');

function toggleActive(){
   if(!this.classList.contains('active')){
      cards.forEach((element) => {
         element.classList.remove('active');
      });
      this.classList.add('active');
   } else{this.classList.remove('active');}
}

cards.forEach((item) => {
   item.addEventListener('click', toggleActive);
})