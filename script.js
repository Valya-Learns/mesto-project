let page = document.querySelector('.page');
let editButton = page.querySelector('.profile__edit-button');
let popupEdit = page.querySelector('.popup-edit');
let popupAdd = page.querySelector('.popup-add');
const addButton = page.querySelector('.profile__add-button')
let popup = page.querySelectorAll('.popup')
const formEdit = page.querySelector('.form-edit');
const nameInput = page.querySelector('.form__text-input__type_name');
const jobInput = page.querySelector('.form__text-input_type_job');
let profileName = page.querySelector('.profile__name');
let profileJob = page.querySelector('.profile__description');
const trash = page.querySelector('.card__trash-icon')
const closeAdd = popupAdd.querySelector('.сlose-add')
const closeEdit = popupEdit.querySelector('.close-edit')
const elementsList = page.querySelector('.elements__list');
const addCardButton = page.querySelector('.add-card')
const cardTemplate = page.querySelector('.template').content;
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function popupOpened(modal) {
    modal.classList.add('popup_opened');
}

function popupClosed(a) {
    a.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
    popupOpened(popupEdit)
    nameInput = profileName.value;
    jobInput = profileJob.value;
});

addButton.addEventListener('click', () => {
    popupOpened(popupAdd)
});

closeAdd.addEventListener('click', () => {
    popupClosed(popupAdd)
});

closeEdit.addEventListener('click', () => {
    popupClosed(popupEdit)
})

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupClosed(popupEdit)
}

formEdit.addEventListener('submit', formSubmitHandler);


trash.addEventListener('click', function () {
    const card = trash.closest('.card');
    card.remove();
}); 

function addCard(placeName, imageLink){

    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = placeName;
    cardImage.querySelector('.card__image').src = imageLink;
   
    elementsList.prepend(cardElement)
    return cardElement
}

addCardButton.addEventListener('click', ()=>{
    const image = page.querySelector('.form__text-input_type_image-link');
    const cardName = page.querySelector('.form__text-input__type_place-name');
    addCard(cardName.value, image.value);
})