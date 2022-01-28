window.addEventListener('load', function (e) {
    //BURGER
    const hdrBurger = document.querySelector('.hdr__btn')
    const hdrMenu = document.querySelector('.hdr__nav');
    const list = document.querySelectorAll('.hdr__list');
    const regBtn = document.querySelector('.hdr__reg');

    const body = document.body;
    console.log();

    hdrBurger.addEventListener('click', toggleClass)
    regBtn.addEventListener('click', removeClass)
    list.forEach(elem => {
        elem.addEventListener('click', removeClass)
    })

    //function
    function toggleClass() {
        if (!hdrMenu.classList.contains('open')) {
            hdrMenu.classList.add('open')
            body.style.overflow = 'hidden'
        } else {
            hdrMenu.classList.remove('open')
            body.style.overflow = 'auto'
        }
    }

    function removeClass() {
        hdrMenu.classList.remove('open')
        body.style.overflow = 'auto'
    }

    //TYPED
    var typed = new Typed('.main__title', {
        strings: ['Маркетинговое агенство в Ташкенте', `Маркетинговое агенство в <span class="main__span">Ташкенте</span>`],
        smartBackspace: true,
        typeSpeed: 60,
        backSpeed: 50,
        startDelay: 500,
        backDelay: 500
    });

    //TO-TOP
    const btn = document.querySelector('.to-top')

    btn.addEventListener('click', () => {
        scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })


    window.addEventListener('scroll', () => {
        if (pageYOffset > 500) {
            btn.style.transform = 'scale(1)'
        } else {
            btn.style.transform = 'scale(0)'
        }
    })
});