let memoriesItems = document.querySelectorAll('.memories-item')

for (let i = 0; i < memoriesItems.length; i++) {
let memoriesButton = memoriesItems[i].querySelector('.memories-button');
let memoriesTitle = memoriesButton.querySelector('.memories-title');
let memoriesDescription = memoriesItems[i].querySelector('.memories-description')

    memoriesButton.onclick = function () {
        memoriesDescription.classList.toggle('memories-description_on');
        memoriesTitle.classList.toggle('memories-title_open');
    }
}