let popupContainer = document.querySelector('.popup-container');
let popup = popupContainer.querySelector('.popup');
let popupImg = popup.querySelector('.popup-img');
let popupClose = popup.querySelector('.popup-close');

let imageButtons = document.querySelectorAll('.image-button');

for (let i = 0; i < imageButtons.length; i++) {
    imageButtons[i].onclick = function () {
        let img = imageButtons[i].querySelector('img');

        popupContainer.classList.add('popup_fade');
        popup.classList.add('popup_on');

        popupImg.src = img.src;
    }
}

popupClose.onclick = function () {
    popupContainer.classList.remove('popup_fade');
    popup.classList.remove('popup_on');
}
