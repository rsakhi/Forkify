import axios from  'axios'

export default class Recipe {
    constructor(id){
        this.id = id
    }

    async getRecipe() {
        const proxy = "https://cors-anywhere.herokuapp.com";
        // const key = "f82ff1015c6efa9f79ed6b46c8137266";
        const key = "b7ff75ba073ef4c01820e663878c2e8c";
        try{
            const res = await axios(`${proxy}/https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            console.log(res);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;
        }catch (error){
            console.log(error)
        }
    }

} 