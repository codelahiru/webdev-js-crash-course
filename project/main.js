/*
in the browser we have the 'window' object. 
This is the parent object of the browser.
*/

//console.log(window);

//// single element selectors ---------------------------------------

// const myForm = window.document.getElementById('my-form');
// console.log(myForm);

// const myH1 = window.document.querySelector('h1');
// console.log(myH1);

//// multiple element selectors -------------------------------------

// const myUl1 = window.document.querySelectorAll('.item');
// console.log(myUl1);                                     // Nodelist

// const myUl2 = window.document.getElementsByClassName('item');
// console.log(myUl2);                                     // HTMLCollection

/*
note: array methods can be applied  for 'Nodelist' but 
not for 'HTMLCollection'
*/

// function myFunc(item){
//     console.log(item);
// }

// myUl1.forEach(myFunc);  // this will not work for myUl2

//// Manupilating the HTML DOM - Document Object Model -------------------

//const ul = window.document.querySelector('.items');

//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Gayan';
// ul.lastElementChild.innerHTML = '<h2>Hello</h2>';

const btn = document.querySelector('.btn');

//btn.style.background = 'green';

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(e.target);
// });

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('header').style.alignContent;
})
























