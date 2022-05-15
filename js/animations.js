//header on load animation
window.addEventListener('DOMContentLoaded', event => {    
    //animation on scroll
const headerText = document.querySelector('.header-text');
const headerMobileCard = document.querySelector('.header-mobile-card');
const featureItem = document.querySelectorAll('.feature-item');



const handleIntersection = (entries, observer) => {
    entries.forEach((entrie) => {
        if(entrie.isIntersecting){
            entrie.target.classList.add('animate-me');
            console.log(entrie.target)
        } else {
            // entrie.target.classList.remove('animate-me');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '500px 0px 100px 0px',
    threshold: .5
});


//setting animations
featureItem.forEach(item=>{
    observer.observe(item);
    })

observer.observe(headerText)
observer.observe(headerMobileCard)

})