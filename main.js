let wrapper = document.querySelector('.wrapper');

let name = prompt('Ismingizni kiriting');
let surname = prompt('Familiyangizni kiriting');
let age = prompt('Yoshingizni kiriting');

let theSizeText = prompt(`1) Katta Text \n2) Kichkina Text`);

if (theSizeText === '1') {
    name = name.toUpperCase();
    surname = surname.toUpperCase();
} else if (theSizeText === '2') {
    name.toLowerCase();
    surname.toLowerCase();
}els

function IsmChiqarish() {
    
    wrapper.innerHTML = `<p>${name}</p><p>${surname}</p><p>${age}</p>`;
}

IsmChiqarish();