// JavaScript code for the Neotrack application

// Array to hold user habits
let habits = [];

// Function to add a new habit
function addHabit(habitName) {
    const habit = {
        name: habitName,
        progress: 0,
        goal: 30 // Default goal for the habit (e.g., 30 days)
    };
    habits.push(habit);
    updateUI();
}

// Function to mark progress for a habit
function markProgress(habitName) {
    const habit = habits.find(h => h.name === habitName);
    if (habit && habit.progress < habit.goal) {
        habit.progress++;
        updateUI();
    }
}

// Function to update the user interface
function updateUI() {
    const habitList = document.getElementById('habit-list');
    habitList.innerHTML = ''; // Clear current list

    habits.forEach(habit => {
        const habitItem = document.createElement('div');
        habitItem.className = 'habit-item';
        habitItem.innerHTML = `
            <h3>${habit.name}</h3>
            <p>Progress: ${habit.progress}/${habit.goal}</p>
            <button onclick="markProgress('${habit.name}')">Mark Progress</button>
        `;
        habitList.appendChild(habitItem);
    });
}

// Event listener for adding a new habit
document.getElementById('add-habit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const habitInput = document.getElementById('habit-input');
    const habitName = habitInput.value.trim();
    if (habitName) {
        addHabit(habitName);
        habitInput.value = ''; // Clear input field
    }
});