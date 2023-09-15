import showMobileMenu from "./js/menu-mobile.js";
import {showBlogJsM, showBlogJs} from "./js/show-blog-js.js";
import {showHomeM, showHome} from "./js/show-home.js";


document.addEventListener('DOMContentLoaded', e => {
}); 

document.addEventListener('click', e => {

    if(e.target === $menu){
        //console.log(e.target);
        showMobileMenu();
    }else if(e.target === $linkHomeB){
        showHomeM();
        showMobileMenu();
    }else if(e.target === $linkJsB){
        showBlogJsM();
        showMobileMenu();
    }else if(e.target === $linkHome || e.target === $logo){
        showHome();
    }else if(e.target === $linkJs ){
        showBlogJs();
    }




},true);