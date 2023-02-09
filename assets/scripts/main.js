const getCollectionCard = (data) => {
  const template = `
    <img src="${data.image}" alt="img" class="item__img">
      <div class="item__titles">
          <h3 class="item__titles-title">${data.title}</h3>
          <h4 class="item__titles-price color--lightblue">Floor: ${data.floor}ETH</h4>
      </div>
      <div class="item__price">
          <p class="item__price-title">${data.count} ETH</p>
          <p class="item__price-title color--lightblue">$${data.price}M</p>
          <p class="item__price-title
          color--turquoise">${data.increase}%</p>
      </div>
  `;
  const div = document.createElement('div');
  div.classList.add('collections__item');
  div.innerHTML = template;

  return div;
}
const collectionsDataWeek = [
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
];
const collectionsDataMonth = [
  {
    image: '/static/img/collection__img-four.png',
    title: 'Worlds Super',
    floor: 0.8,
    count: 5800,
    price: 8400000,
    increase: 154,
  },
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
  {
    image: '/static/img/collection__img-four.png',
    title: 'Super Worlds',
    floor: 0.7,
    count: 5800,
    price: 8400000,
    increase: 294.7,
  },
];
const fakeDataFetch = (type) => {
  return type === 'week' ? collectionsDataWeek : collectionsDataMonth;
};

let isLoading = false;
const collectionsList = document.querySelector('.collections__list');
const collectionsFilterBtns = document.querySelectorAll('input[name="collectionsFilter"]');
collectionsFilterBtns.forEach((collectionsFilterBtn) => {
  collectionsFilterBtn.addEventListener('change', ({target}) => {
    const filterType = target.value;

    if (isLoading) {
      return false;
    }
    isLoading = true;
    collectionsList.classList.add('collections__list--loading');
    collectionsList.innerHTML = '';

    setTimeout(() => {
      // FAKE REST API REQUEST >>> 12 items
      const collectionsData = fakeDataFetch(filterType);
      // FAKE ENDc

      const fragment = document.createDocumentFragment();
      collectionsData.forEach((collectionsDataItem) => {
        const collectionCard = getCollectionCard(collectionsDataItem);
        fragment.appendChild(collectionCard);
      });

      collectionsList.appendChild(fragment);
      collectionsList.classList.remove('collections__list--loading');
      isLoading = false;
    }, 3000);
  });
});

// js-categories-slider
const categoriesSlider = new Swiper(document.querySelector('.js-categories-slider'), {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// js-tranding-slider
const trandingSlider = new Swiper(document.querySelector('.js-tranding-slider'), {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
