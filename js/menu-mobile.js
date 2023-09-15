export default function showMobileMenu(){

    let menu =  '../assets/icons/🦆 icon _menu_.png',
        down = '../assets/icons/🦆 icon _down arrow_.png'

    $mobileMenu.classList.toggle('none');
    $mobileMenu.classList.toggle('flex');

    if($mobileMenu.classList.contains('none')){
        $menu.src = menu;
        console.log('menu');
    }else if($mobileMenu.classList.contains('flex')){
        $menu.src = down;
        console.log('down');
    }
}

