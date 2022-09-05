const page = document.querySelector('.page');
const editButton = page.querySelector('.profile__edit-button');
const popupEdit = page.querySelector('.popup-edit');
const popupAdd = page.querySelector('.popup-add');
const addButton = page.querySelector('.profile__add-button')
const formEdit = page.querySelector('.form-edit');
const formAdd = page.querySelector('.form-add')
const profileName = page.querySelector('.profile__name');
const profileJob = page.querySelector('.profile__description');
const closeAdd = popupAdd.querySelector('.сlose-add')
const closeEdit = popupEdit.querySelector('.close-edit')
const elementsList = page.querySelector('.elements__list');
const addCardButton = page.querySelector('.add-card');
const popupCard = page.querySelector('.popup-image');
const popupCardImage = popupCard.querySelector('.popup-image__image');
const popupCardText = popupCard.querySelector('.popup-image__text');
const closeImage = page.querySelector('.close-image')
const nameInput = page.querySelector('.form__text-input__type_name');
const jobInput = page.querySelector('.form__text-input_type_job');
const image = page.querySelector('.form__text-input_type_image-link');
const cardElement = document.querySelector('.template').content;
const cardName = page.querySelector('.form__text-input__type_place-name');



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

function openPopup(modal) {
    modal.classList.add('popup_opened');
}

function closePopup(modal) {
    modal.classList.remove('popup_opened');
}

editButton.addEventListener('click', () => {
    openPopup(popupEdit)
    nameInput.value = profileName.textContent.trim();
    jobInput.value = profileJob.textContent.trim();
});

addButton.addEventListener('click', () => {
    openPopup(popupAdd)
});

closeAdd.addEventListener('click', () => {
    closePopup(popupAdd)
});

closeEdit.addEventListener('click', () => {
    closePopup(popupEdit)
})

function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(popupEdit);
}

formEdit.addEventListener('submit', handleProfileFormSubmit);



function createCard(placeName, imageLink) {
    const card = cardElement.cloneNode(true);
    card.querySelector('.card__title').textContent = placeName;
    const cardImage = card.querySelector('.card__image');
    cardImage.src = imageLink;
    cardImage.alt = placeName;
    cardImage.addEventListener('click', () => {
        openPopup(popupCard);
        popupCardImage.src = imageLink;
        popupCardImage.alt = placeName
        popupCardText.textContent = placeName;      
    })

    const likeButton = card.querySelector('.card__like-button')
    likeButton.addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like-button_active');
    }
    )
    const trash = card.querySelector('.card__trash-icon');
    trash.addEventListener('click', function () {
        trash.closest('.card').remove();
    });

    return card
}

closeImage.addEventListener('click', () => {
    closePopup(popupCard);
})

function addCard(cardEl) {
 elementsList.prepend(cardEl);
}

function submitCard(evt) {
    evt.preventDefault();
    addCard(createCard(cardName.value, image.value));
    closePopup(popupAdd)
    evt.target.reset()
}

formAdd.addEventListener('submit', submitCard)


initialCards.forEach(function (element) {
    elementsList.append(createCard(element.name, element.link));
})
 