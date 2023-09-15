export function showHomeM(){
    console.log('home');
    $blogJs.classList.add('none');

    $home.classList.remove('none');
}

export function showHome(){
    console.log('home-d');
    $home.classList.remove('none');
    $blogJs.classList.add('none');
    $blogJs.classList.remove('flex');
}