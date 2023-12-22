// Only declare languages if not already declared
if (typeof languages === 'undefined') {
    const languages = ['en', 'es', 'fr','it', 'ar', 'de', 'ru','zh'];
}



// Function to show the pie chart for the selected language
function showPieChart(language) {
    const pieChartContainer = document.getElementById('pie-chart-container');
    pieChartContainer.innerHTML = '';

    const image = document.createElement('img');
    image.src = `${baseurl}/blog/wordclouds/wordcloud_${language}.png`;  
    image.alt = '';
    image.style="width: 100%;" 


    pieChartContainer.appendChild(image);
}

// Function to show the selected language
function showLanguage(language) {
    showPieChart(language);
}

// Initial setup when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Default to showing English
    showLanguage('en');
});

