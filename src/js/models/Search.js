import axios from  'axios'

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getSearchResult(){
        const proxy = "https://cors-anywhere.herokuapp.com";
        const key = "f82ff1015c6efa9f79ed6b46c8137266";
        try{
            const res = await axios(`${proxy}/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.results = res.data.recipes;
            console.log(this.results);
        }catch (error){
            console.log(error)
        }
    }
}
