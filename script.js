document.addEventListener("DOMContentLoaded", function() {
    const expandableImgs = document.querySelectorAll('.expandable-img');

    expandableImgs.forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('expanded');
        });
    });
});