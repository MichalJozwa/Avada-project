import DMList from './pages-dropdown-list.json' assert {type: 'json'};

// https://www.tutorialstonight.com/javascript-loop-through-an-array-of-objects

// Initialize Slider/Swiper
var headerSwiper = new Swiper(".headerSwiper", {
   loop: true,
   keyboard: true,
   mousewheel: false,
   speed: 800,
   autoplay: {
      delay: 6000,
   },
   pagination: {
      el: ".header-pagination",
      dynamicBullets: true,
      clickable: true,
   },
   navigation: {
      prevEl: '.header_btn--left',
      nextEl: '.header_btn--right',
    },
});

var mainSwiper = new Swiper(".main-container_recent-work__carousel", {
   centeredSlides: false,
   slidesPerView: "auto",
   spaceBetween: 30,
   loop: true,
   keyboard: true,
   mousewheel: false,
   speed: 600,
   grabCursor: true,
   autoplay: {
      delay: 7000,
   },
   navigation: {
      prevEl: '.recent-work_btn--left',
      nextEl: '.recent-work_btn--right',
   },
   breakpoints: {
      '@0.00': {
         slidesPerView: 1,
         spaceBetween: "auto",
      },
      '@0.50': {
         slidesPerView: 2,
         spaceBetween: 10,
         centeredSlides: false,
         autoplay: {
            delay: 2000,
         },
      },
      '@0.75': {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      "@1.00": {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      "@1.50": {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
});

// loop through the JSON
// for(let i = 0; i<DMList.length; i++){
//    if(element.accessible == true){
//       console.log(DMList[i]);
//    }
// }

// check if a number is odd
// function isOdd(num) {return num % 2 === 1}
// console.log(!isOdd(2))

// function showing odd order objects
// const odds = DMList.filter(
//    (number) => number & 2 === 1
// );

// let array = DMList.forEach(element => {
//    if(isOdd(element[1].order))
//       return true
//    return false
// })

// console.log(array);

// checks what pages are accessible
// const isAccessible = DMList.find(element => {
//    if(element.accessible == true){
//       return true
//       // const text = "↓ Element with accessibility ✔";
//       // const array = [element.order, element.accessible, element.name, element.url];
//       // console.log(text)
//       // console.log(array)
//    } /* else {
//       setTimeout(() => {
//          // console.log("↓ Element with no accessibility ❌")
//          console.log(element.order, element.accessible, element.name, element.url)
//       }, 100);
//    } */
//    return false
// });

// function returning objects with a specific properties
const test = { accessible: true};

function getExact(DMList, test){
   return DMList.filter(obj => {
      return (
         obj.accessible == test.accessible
      );
   });
}
console.log(getExact(DMList, test));

// DMList.forEach(function(item, index){
//    if(item = isAccessible){
//       console.log(item.name, index)
//    } else{
//       console.log("false");
//    }
//    // console.log(item.name, index)
// });

// Function adding elements into menu.
function addElement(){
   getExact(DMList, test).forEach((element => {
      const ul = document.querySelector(".dropdown_list");
      const li = document.createElement("li");
      const link = document.createElement("a");

      li.classList.add("dropdown_list__item");
      link.href = element.url;
      link.innerText = element.name;

      li.append(link);
      ul.append(li);
   }))
}

addElement();
   /* if(isAccessible){
      // console.log(getExact(DMList, test));

      const ul = document.querySelector(".dropdown_list");
      const li = document.createElement("li");
      const link = document.createElement("a");

      li.classList.add("dropdown_list__item");
      link.href = url;
      // link.href = getExact(DMList, test)[1].url;
      // link.href = this.url;
      link.innerText = name;
      // link.innerText = this.name;
      // link.innerText = getExact(DMList, test)[1].name;

      li.append(link);
      ul.append(li);
   } */

   /* const htmlStructure = () => {
      const newDiv = document.createElement("li");
      newDiv.classList.add('dropdown_list__item');

      const newContent = document.createTextNode(document.createElement("a"));
      newDiv.appendChild(newContent);
      
      const currentDiv = document.querySelector('dropdown_list__item');

      document.querySelector('dropdown_list') += newDiv;
      // document.body.insertBefore(newDiv, currentDiv);
   } */

// Function injecting url into html
// const link = document.querySelector('dropdown_list__item a');

// function changeUrl({url}){
//    DMList.some(element => {
//       console.log(element.url);
//    })
// }

// link.forEach((item) => {
//    // item.href = changeUrl;
// });

// // all my other tries..
// const listAmount = Object.keys(DMList).length;

// function getRightPage() {
//    for(let i=0;i<listAmount;i++){
//       DMList.find(el => el.accessible == true);
//    }
// }

// function showAccessiblePages(){
//    if(Object.values(DMList).includes("accessible")){
//       console.log('true');
//    }
//    console.log(DMList.some(el => el.accessible == true));
//    // console.log('nah :(');
// }

// showAccessiblePages();
// getRightPage();

// Find what object has a value.

// function getPages(){
//    let foo = DMList.toString();
   
//    for(let i=0;i<listAmount; i++){

//       console.log(foo);

//       console.log(getRightPage["name"]);
//    }
// }

// getPages();

// var names = DMList.map(d => d.name);

// if(DMList[2].name == "Pricing" && DMList[2].accessible == true){
//    console.log('true')
// } else{
//    console.log('false')
// }

///////////////////////////////////////////////////////////
////  end of playground with DMS                       ////
///////////////////////////////////////////////////////////

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