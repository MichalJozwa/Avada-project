import DMList from './pages-dropdown-list.json' assert {type: 'json'};

// https://www.tutorialstonight.com/javascript-loop-through-an-array-of-objects

// for(let i = 0; i<DMList.length; i++){
//    if(element.accessible == true){
//       console.log(DMList[i]);
//    }
// }

// checks what pages are accessible
const isAccessible = DMList.find(element => {
   if(element.accessible == true){
      return true
      // const text = "↓ Element with accessibility ✔";
      // const array = [element.order, element.accessible, element.name, element.url];
      // console.log(text)
      // console.log(array)
   } /* else {
      setTimeout(() => {
         // console.log("↓ Element with no accessibility ❌")
         console.log(element.order, element.accessible, element.name, element.url)
      }, 100);
   } */
   return false
});

// function returning properties

const test = { accessible: true };

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
   if(isAccessible){
      console.log(isAccessible);

      const ul = document.querySelector(".dropdown_list");
      const li = document.createElement("li");
      const link = document.createElement("a");

      li.classList.add("dropdown_list__item");
      link.href = getExact(DMList, test)[1].url;
      // link.href = this.url;
      // link.innerText = this.name;
      link.innerText = getExact(DMList, test)[1].name;

      li.append(link);
      ul.append(li);
   }

   /* const htmlStructure = () => {
      const newDiv = document.createElement("li");
      newDiv.classList.add('dropdown_list__item');

      const newContent = document.createTextNode(document.createElement("a"));
      newDiv.appendChild(newContent);
      
      const currentDiv = document.querySelector('dropdown_list__item');

      document.querySelector('dropdown_list') += newDiv;
      // document.body.insertBefore(newDiv, currentDiv);
   } */
}

addElement();


// Function injecting url into html
const link = document.querySelector('dropdown_list__item a');

function changeUrl(){
   DMList.some(element => {
      console.log(element.url);
   })
}

// link.forEach((item) => {
//    // item.href = changeUrl;
// });

// all my other tries..
const listAmount = Object.keys(DMList).length;

function getRightPage() {
   for(let i=0;i<listAmount;i++){
      DMList.find(el => el.accessible == true);
   }
}

function showAccessiblePages(){
   if(Object.values(DMList).includes("accessible")){
      console.log('true');
   }
   console.log(DMList.some(el => el.accessible == true));
   // console.log('nah :(');
}

// showAccessiblePages();
// getRightPage();

// Find what object has a value.

function getPages(){
   let foo = DMList.toString();
   
   for(let i=0;i<listAmount; i++){

      console.log(foo);

      console.log(getRightPage["name"]);
   }
}

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