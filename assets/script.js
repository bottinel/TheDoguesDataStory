// Only declare languages if not already declared
if (typeof languages === 'undefined') {
    const languages = ['eng', 'es', 'fr','it'];
}


// Function to show the pie chart for the selected language
function showPieChart(language) {
    const pieChartContainer = document.getElementById('pie-chart-container');
    pieChartContainer.innerHTML = '';

    const image = document.createElement('img');
    image.src = `${language}_pie/${language}_mainheadings.png`;  // Use a common filename for all languages
    image.alt = `${language} Pie Chart`;
    pieChartContainer.appendChild(image);
}

// Function to show the selected language
function showLanguage(language) {
    showPieChart(language);
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Default to showing English
    showLanguage('eng');
});

