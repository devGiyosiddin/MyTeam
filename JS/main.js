const modifiers = {
    ItemActive: 'dir-item__hover-wrapper--active',
    ItemClose: 'dir-item__wrapper--close',
    IconRotated: 'dir-item__button-icon--rotate',
    AddBgColor: 'dir-item_button--bg-color',
}

const elsItemButton = document.querySelectorAll('.dir-item_button');
const elsDefItem = document.querySelectorAll('.dir-item__wrapper');
const elsActiveItem = document.querySelectorAll('.dir-item__hover-wrapper');
const elsButtonIcon = document.querySelectorAll('.dir-item__button-icon');

function RotateIcon() {
    elsButtonIcon.forEach(function (elButtonIcon) {
        elButtonIcon.classList.toggle(modifiers.IconRotated);
    })
}

elsItemButton.forEach(function (elItemButton) {
    elItemButton.addEventListener('click', function () {
        elItemButton.classList.toggle(modifiers.AddBgColor);
        elItemButton.parentElement.children[0].classList.toggle(modifiers.ItemClose);
        elItemButton.parentElement.children[1].classList.toggle(modifiers.ItemActive);
        RotateIcon();
    });
});
