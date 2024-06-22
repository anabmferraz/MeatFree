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
