document.querySelectorAll(".tabs button").forEach(btn=>{

btn.addEventListener("click",()=>{

document
.querySelectorAll(".tabs button")
.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

});

});

window.addEventListener("scroll",()=>{

const nav=document.querySelector("header");

if(window.scrollY>100){

nav.style.background="rgba(16,60,74,.98)";

}else{

nav.style.background="rgba(13,47,58,.95)";

}

});

new Swiper(".copierSwiper", {
    loop: true,
    spaceBetween: 35,
    speed: 700,
    grabCursor: true,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".copierSwiper .swiper-button-next",
        prevEl: ".copierSwiper .swiper-button-prev",
    },

    pagination: {
        el: ".copierSwiper .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

const canonLaserSwiper = new Swiper(".canonLaserSwiper", {

    loop: true,

    spaceBetween: 25,

    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".canonLaserSwiper .swiper-button-next",
        prevEl: ".canonLaserSwiper .swiper-button-prev",
    },

    

    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

document.querySelector(".canonLaserSwiper").addEventListener("click", () => {
    canonLaserSwiper.autoplay.stop();
});

const brotherSwiper = new Swiper(".brotherSwiper", {

    loop: true,
    spaceBetween: 25,
    speed: 800,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },

    pagination: {
        el: ".brotherSwiper .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

const buttons = document.querySelectorAll(".tabs button");
const products = document.querySelectorAll(".product-card");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    products.forEach(product => {
      const type = product.dataset.type;

      if (filter === "all" || type === filter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });

  });
});

const scannerSwiper = new Swiper(".scannerSwiper", {

    loop: true,
    spaceBetween: 25,
    speed: 800,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".scannerSwiper .swiper-button-next",
        prevEl: ".scannerSwiper .swiper-button-prev",
    },

    pagination: {
        el: ".scannerSwiper .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});

const inkSwiper = new Swiper(".inkSwiper", {

loop: false,
    spaceBetween: 25,
    speed: 800,

    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    navigation: {
        nextEl: ".inkSwiper .swiper-button-next",
        prevEl: ".inkSwiper .swiper-button-prev",
    },

    pagination: {
        el: ".inkSwiper .swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        0: { slidesPerView: 1.1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 }
    }
});
document.getElementById("whatsappForm").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    // رقم الهاتف المستلم مع المفتاح الدولي
    const myPhoneNumber = "9647711117108"; 
    
    const text = `طلب تواصل جديد من الموقع:%0A` +
                 `• الاسم: ${encodeURIComponent(name)}%0A` +
                 `• الهاتف: ${encodeURIComponent(phone)}%0A` +
                 `• البريد: ${encodeURIComponent(email)}%0A` +
                 `• الرسالة: ${encodeURIComponent(message)}`;
                 
    window.open(`https://wa.me/${myPhoneNumber}?text=${text}`, '_blank');
});