import './css/styles.css';
import axios from 'axios';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
 const refs = {
     searchForm:document.querySelector('#search-box'),
     searchQuery: document.querySelector('input[name="searchQuery"]'),
     submitBtn: document.querySelector('.search-form_button'),
     
 }
 let name = searchQuery.value;
 let page = 0;
 let perPage = 40;

async function fetchImage (name, page) { 
    try{
        const response = await axios.get(`
        https://pixabay.com/api/?key=27790361-d52fedb5b14fb71941e53259d&q=${name}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`);
        console.log(response);
        return response.data
    }catch(error){
        console.log(error)
    }
}