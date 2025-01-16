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