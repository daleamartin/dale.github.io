document.addEventListener('DOMContentLoaded', () => {
    const foodForm = document.getElementById('foodForm');
    const foodCards = document.getElementById('foodCards');

    foodForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form input values
        const foodName = document.getElementById('foodName').value.trim();
        const description = document.getElementById('description').value.trim();
        const imageUrl = document.getElementById('imageUrl').value.trim();
        const rank = parseInt(document.getElementById('rank').value);

        // Validate inputs
        if (foodName === '' || description === '' || imageUrl === '' || isNaN(rank)) {
            alert('Please fill in all fields and ensure rank is a number.');
            return;
        }

        // Create new food card
        const card = document.createElement('div');
        card.classList.add('food-card');
        card.innerHTML = `
            <img src="${imageUrl}" alt="${foodName}">
            <h2>${foodName}</h2>
            <p>${description}</p>
            <p>Rank: ${rank}</p>
            <button class="delete-btn">Delete</button>
        `;

        // Add new card according to rank
        let inserted = false;
        for (let i = 0; i < foodCards.children.length; i++) {
            const existingRank = parseInt(foodCards.children[i].querySelector('p').textContent.split(':')[1]);
            if (rank < existingRank) {
                foodCards.insertBefore(card, foodCards.children[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
            foodCards.appendChild(card);
        }

        // Clear form fields
        foodForm.reset();
    });

    // Delete button functionality
    foodCards.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    });
});
