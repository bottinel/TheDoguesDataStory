---

intro

## Data exploration

## Research question 1:

## Research question 2:



<section id="linkHere">
  <div class="container flex">
    <div class="text editable" style="background-color: #FFFFFF;">

      <!-- Language buttons -->
<style>
  .active-button {
    background-color: #f1f1f1;
    color: #fff;
  }
</style>


<div class="language-buttons" style="text-align: center; margin: 0; padding: 20px 0;">

  <button onclick="showLanguage('eng')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 120px; height: 40px; border-radius: 20px; box-shadow: none;">English</button>

  <button onclick="showLanguage('es')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 120px; height: 40px; border-radius: 20px; box-shadow: none;">Spanish</button>

  <button onclick="showLanguage('fr')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 120px; height: 40px; border-radius: 20px; box-shadow: none;">French</button>

  <button onclick="showLanguage('it')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 120px; height: 40px; border-radius: 20px; box-shadow: none;">Italian</button>


</div>


<script>
  function showLanguage(language) {
    // Reset all buttons to the default style
    document.getElementById('engButton').classList.remove('active-button');
    document.getElementById('esButton').classList.remove('active-button');
    document.getElementById('frButton').classList.remove('active-button');
    document.getElementById('itButton').classList.remove('active-button');

    // Set the active style to the pressed button
    document.getElementById(`${language}Button`).classList.add('active-button');

    // Your existing showLanguage logic
    showPieChart(language);
  }
</script>

      <div class="image">
        <div id="pie-chart-container"></div>
      </div>
    </div>
  </div>
</section>

<div class="script">
  <script src="{{ site.baseurl }}/assets/script.js"></script>
</div>


**Conclusion**

