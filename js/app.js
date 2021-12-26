// window.addEventListener("scroll", function(event){
//    var top = this.scrollY;
//    if(top >= 700 && top < 800){
//       document.querySelector('.extended-card:first-of-type').classList.add('active');
//       document.querySelector('.extended-card:nth-child(2)').classList.remove('active');
//    } else if(top >= 800){
//       document.querySelector('.extended-card:first-of-type').classList.remove('active');
//       document.querySelector('.extended-card:nth-child(2)').classList.add('active');
//    } else if(top >= 900){
//       document.querySelector('.extended-card:nth-child(2)').classList.remove('active');
//       document.querySelector('.extended-card:nth-child(3)').classList.add('active');
//    }
//    if(top < 700){
//       document.querySelectorAll('.extended-card').classList.remove('active');
//    }
// }, false);

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