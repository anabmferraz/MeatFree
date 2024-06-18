document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.remove-favorite');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeFavorite);
    });

    document.getElementById('sort-select').addEventListener('change', sortRecipes);
});

function removeFavorite(event) {
    const card = event.target.closest('.recipe-card');
    card.remove();
}

function sortRecipes() {
    const sortValue = document.getElementById('sort-select').value;
    const recipeSection = document.querySelector('.favorites-section');
    const recipes = Array.from(recipeSection.getElementsByClassName('recipe-card'));

    recipes.sort((a, b) => {
        if (sortValue === 'name') {
            return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
        } else if (sortValue === 'date') {
            // Assuming that date is stored in a data attribute data-date
            return new Date(a.dataset.date) - new Date(b.dataset.date);
        } else if (sortValue === 'rating') {
            // Assuming that rating is stored in a data attribute data-rating
            return b.dataset.rating - a.dataset.rating;
        }
    });

    recipes.forEach(recipe => recipeSection.appendChild(recipe));
}
