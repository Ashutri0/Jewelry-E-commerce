// Category dropdown toggle
const categoryBtn = document.querySelector('.category-btn');
const categoryList = document.querySelector('.category-list');
const searchContainer = document.querySelector('.search-container');

categoryBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    categoryList.classList.toggle('active');
});

// Category selection
document.querySelectorAll('.category-list li').forEach(item => {
    item.addEventListener('click', () => {
        categoryBtn.textContent = item.textContent;
        categoryList.classList.remove('active');
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const menu = document.querySelector('.menu');

mobileMenuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    searchContainer.classList.toggle('active');
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!categoryBtn.contains(e.target)) {
        categoryList.classList.remove('active');
    }
    if (!menu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        menu.classList.remove('active');
    }
});

// Search functionality
const searchInput = document.querySelector('.search-box input');
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        // Add your search functionality here
        console.log('Searching in', categoryBtn.textContent, 'for:', searchInput.value);
    }
});



// testimonials 

document.addEventListener("DOMContentLoaded", () => {
    const testimonials = [
        {
            name: "Sushil Behera",
            content: "I buy my daughter's birthday gift every year at Bluestone, and my daughter really loves it. I really appreciate the products delivered as promised and the quality of the product.",
            stars: 5
        },
        {
            name: "Ananya Sharma",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, consequuntur impedit voluptas natus reiciendis assumenda eaque officiis iste ducimus vitae.",
            stars: 2
        },
        {
            name: "Rahul Mehta",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            stars: 1
        },
        {
            name: "Ashutosh Tripathi",
            content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, consequuntur impedit voluptas natus. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
            stars: 4
        }
    ];

    let currentIndex = 0;
    const contentElement = document.getElementById("testimonial-content");
    const starsElement = document.getElementById("stars");
    const dots = document.querySelectorAll(".dot");

    const updateTestimonial = (index) => {
        const testimonial = testimonials[index];
        contentElement.innerHTML = `
            <h4>${testimonial.name}</h4>
            <p>${testimonial.content}</p>
        `;
        starsElement.innerHTML = "★".repeat(testimonial.stars) + "☆".repeat(5 - testimonial.stars);
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    };

    const autoSlide = () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    };

    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            currentIndex = parseInt(dot.dataset.index, 10);
            updateTestimonial(currentIndex);
            restartAutoSlide();
        });
    });

    let autoSlideInterval = setInterval(autoSlide, 5000);

    const restartAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(autoSlide, 5000);
    };

    updateTestimonial(currentIndex);
});



// animation

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});



// ////////
const productData = [
    {
        image: './assets/images/best01.png',
        title: 'Pearl Diamond Ring',
        sku: 'SKU: JBA12R23',
        price: '₹ 3320',
    },
    {
        image: './assets/images/best02.png',
        title: 'Gold Pendant',
        sku: 'SKU: GPA45R56',
        price: '₹ 4500',
    },
    {
        image: './assets/images/best03.png',
        title: 'Silver Bracelet',
        sku: 'SKU: SBA78R90',
        price: '₹ 2800',
    },
    {
        image: './assets/images/best04.png',
        title: 'Platinum Necklace',
        sku: 'SKU: PNA12R34',
        price: '₹ 15000',
    },
];

const carouselTrack = document.getElementById('carousel-track');

const createCarouselItem = (product) => {
    const item = document.createElement('div');
    item.classList.add('carousel-item');
    item.innerHTML = `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-details">
                <div class="product-actions">
                    <div class="product-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <div class="action-buttons">
                        <button class="action-btn" title="Favorite">
                            <i class="far fa-heart"></i>
                        </button>
                        <button class="action-btn" title="Quick view">
                            <i class="fas fa-search"></i>
                        </button>
                        <button class="action-btn" title="Share">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-sku">${product.sku}</p>
                <div class="product-actions">
                    <div class="action-buttons">
                        <p class="product-price">${product.price}</p>
                    </div>
                    <button class="add-to-cart"><i class="fa-solid fa-cart-plus"></i> &nbsp; Add</button>
                </div>
            </div>
        </div>
    `;
    return item;
};

const loopedProducts = [...productData, ...productData];

loopedProducts.forEach(product => {
    carouselTrack.appendChild(createCarouselItem(product));
});

let currentIndex = 0;
const totalItems = loopedProducts.length / 2;

const updateCarousel = () => {
    const itemWidth = document.querySelector('.carousel-item').clientWidth;
    carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
};

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    updateCarousel();
});

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();