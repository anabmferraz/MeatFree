// Função para ordenar receitas
function sortRecipes() {
    const sortBy = document.getElementById('sort-select').value;
    const recipes = Array.from(document.querySelectorAll('.recipe-card'));
  
    recipes.sort((a, b) => {
      const nameA = a.querySelector('h3').innerText.toUpperCase();
      const nameB = b.querySelector('h3').innerText.toUpperCase();
      
      if (sortBy === 'name') {
        return nameA.localeCompare(nameB);
      } else if (sortBy === 'date') {
        return nameB.localeCompare(nameA); // Reversed for demonstration
      } else if (sortBy === 'rating') {
        return nameA.localeCompare(nameB); // Same for demonstration
      }
    });
  
    const section1 = document.querySelector('.receitasPrincipal-section');
    const section2 = document.querySelector('.receitasPrincipal-section2');
    section1.innerHTML = '';
    section2.innerHTML = '';
  
    recipes.forEach((recipe, index) => {
      if (index < 3) {
        section1.appendChild(recipe);
      } else {
        section2.appendChild(recipe);
      }
    });
  }
  
  // Função para remover uma receita dos favoritos
  document.querySelectorAll('.remove-favorite').forEach(button => {
    button.addEventListener('click', (event) => {
      const recipeCard = event.target.closest('.recipe-card');
      recipeCard.remove();
    });
  });
  