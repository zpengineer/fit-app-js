import FoodsAppApi from './api.js';

const refs = {
    form: document.querySelector('.search-form'),
    submitBtn: document.querySelector('.submit-btn'),
}

refs.submitBtn.addEventListener('click', foodItemsSearch);

const foodAppApi = new FoodsAppApi();

async function foodItemsSearch(e) {

    e.preventDefault();

    foodAppApi.foodQuery = refs.form.foods.value;

    const getData = await foodAppApi.fetchFoods();

    console.log(getData);
}