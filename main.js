const bikeData = [
    {
        name: "Honda Africa Twin",
        type: "Adventure",
        price: 20,
        image: "image/bike-1.png",
    },
    {
        name: "BMW GS1250",
        type: "Adventure",
        price: 20,
        image: "image/bike-2.png",
    },
    {
        name: "Honda CBR125",
        type: "Naked",
        price: 20,
        image: "image/bike-3.png",
    },
    {
        name: "Ducati Multistrada",
        type: "Adventure",
        price: 17,
        image: "image/bike-4.png",
    },
    {
        name: "Vespa Primavera",
        type: "moto scooter",
        price: 20,
        image: "image/bike-5.png",
    },
    {
        name: "BMW GS1250",
        type: "Adventure",
        price: 17,
        image: "image/bike-6.png",
    },
    {
        name: "Yamaha xmax125",
        type: "moto scooter",
        price: 17,
        image: "image/bike-7.png",
    },
    {
        name: "Yamaha Cross125",
        type: "Adventure",
        price: 20,
        image: "image/bike-8.png",
    },
];
// Function to create bike box element 
const createBikeBox = (bike)=> `
<div class="bike-box">
    <img src="${bike.image}" alt="" class="box-img"/>
    <div class="title-price">
        <div class="title-data">
            <h2>${bike.name}</h2>
            <p>${bike.type}</p>
        </div>
        <h3 class="bike-price">€${bike.price}<span>/hour</span></h3> 
    </div>
    <a href="#" class="book-bt">Book Bike</a> 
 </div>
`; 
const bikeContent = document.querySelector(".bikes-content");

//bike-box and bike-content
bikeData.forEach((bike) => {
    const bikeBoxHtml= createBikeBox(bike);
    bikeContent.insertAdjacentHTML("beforeend", bikeBoxHtml);
});
//Swiper
var swiper = new Swiper(".destination-container",{
    slidePerView:1,
    spaceBetween: 10,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    pagination:{
        el:".swiper-pagination",
        dynamicBullets: true,
        clickable:true,
    },
    breakpoints:{
        280:{
            slidePerView:1,
            spaceBetween:10,
        },
        320:{
            slidePerView:2,
            spaceBetween:10,
        },
    }
});
//Menu 
let menu = document.querySelector(".menu-icon");

menu.onclick = () => {
    menu.classList.toggle("move");
}
