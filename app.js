const newSlide = () =>{
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav-links');
    console.log(burger);
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
newSlide();
