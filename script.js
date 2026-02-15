// Loading Screen
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('loading').classList.add('hidden');
    }, 1000);
});

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe all elements with data-scroll attribute
document.querySelectorAll('[data-scroll]').forEach(el => {
    observer.observe(el);
});

// Shopping Cart Functionality
let cartCount = 0;

function addToCart(productName, price) {
    cartCount++;
    document.getElementById('cartBadge').textContent = cartCount;
    
    // Cart badge animation
    const badge = document.getElementById('cartBadge');
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => {
        badge.style.transform = 'scale(1)';
    }, 200);

    // Show alert
    alert(`✅ ${productName} added to cart!\nPrice: $${price}\nTotal items: ${cartCount}`);
}

// Newsletter Subscription
function subscribe(e) {
    e.preventDefault();
    const email = e.target.querySelector('input').value;
    alert(`🎉 Thank you for subscribing!\nWe'll send updates to ${email}`);
    e.target.reset();
    return false;
}

// Scroll to Products Section
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});