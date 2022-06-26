function mostrarElemento(id, visibilidade) {
    document.getElementById(id).style.display = visibilidade;
}

function changeToSlide(id) {
    const elements = document.getElementById(id)   
}

function handleChangeSlide(index, carouselId) {
    let myCarousel = document.getElementById(carouselId)
    let carousel = new bootstrap.Carousel(myCarousel)
    carousel.to(index)
    myCarousel.scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'})
}