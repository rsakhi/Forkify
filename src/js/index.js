// import {add} from './views/searchView'
// console.log(add(2,3));

import Search from './models/Search';
import * as searchView from './views/searchView'
import {elements} from "./views/base";

// const search = new Search("pizza");
// search.getSearchResult();

const state = {};

const controleSearch = async () => {

    //1) read input from UI
    const quary = searchView.getInput();
    console.log(quary);


    //2) create new Search Object
    state.search = new Search(quary);
    // ) prepare UI for search result

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
