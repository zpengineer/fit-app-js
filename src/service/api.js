import axios from "axios";

const API_KEY = 'DDeAPqIUgaVqsutmxWCtVvFgoC6zci7D4U91Jqc2';
const BASE_URL = `https://api.nal.usda.gov/fdc/v1/foods/list?api_key=${API_KEY}`;

export default class FoodsAppApi{
    constructor() {
        this.query = '';
    }

    async fetchFoods(){
        const response = await axios.get(`${BASE_URL}&query=${this.query}`);
        const data = await response.data;

        return data;
    }

    get foodQuery() {
        return this.query;
    }

    set foodQuery(newQuery) {
        this.query = newQuery;
    }
}


