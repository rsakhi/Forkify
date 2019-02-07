// import {add} from './views/searchView'
// console.log(add(2,3));


import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from "./views/base";
import Recipe from './models/Recipes';
 
// const search = new Search("pizza");
// search.getSearchResult();

const state = {};
// Search Contoller 
const controleSearch = async () => {

    //1) read input from UI
    const quary = searchView.getInput();
    console.log(quary);


    //2) create new Search Object
    state.search = new Search(quary);

    // ) prepare UI for search result
    searchView.clearInput();
    searchView.clearResults();

    //3) make API call
    await state.search.getSearchResult();
    
    //4) display result
    searchView.renderResults(state.search.results);
    console.log(state.search.results);
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controleSearch();
})


// Recipe Controller

const controleRecipe = async () => {

    // 1) get Id from URL
    const id = window.location.hash.replace('#', '');
    if(id){
        // ) Clear rcipe

        //2) get recipe
        state.recipe = new Recipe(id);
        await state.recipe.getRecipe();
        
        // 3) Display Recipe

    }
    
}

windows.addEventListener('hashchange', controleRecipe)