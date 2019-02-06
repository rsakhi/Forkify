// import {add} from './views/searchView'
// console.log(add(2,3));

import Search from './models/Search';


// const search = new Search("pizza");
// search.getSearchResult();

const state = {};

const controleSearch = async () => {

    //1) read input from UI
    const quary = "pizza";
    //2) create new Search Object
    state.search = new Search(quary);
    // ) prepare UI for search result

    //3) make API call
    await state.search.getSearchResult();
    //4) display result 
    console.log("from index");
    console.log(state.search.results);
}

document.querySelector('.search__btn').addEventListener('click', e => {
    e.preventDefault();
    console.log("fro");
    controleSearch();
})
