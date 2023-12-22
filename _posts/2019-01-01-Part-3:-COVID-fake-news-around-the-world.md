
---

Now that we have proven than Wikipedia is actually a good tool to study the phenomenon of fake news, we want to study the relationship between COVID Wikipedia pages for different languages. Since the Wikipedia pages in different languages don't have the same structure (so we cannot compare main headings), we want to analyse the links they refer to. What kind of overlap is there between each language? In this way we can see the differences between global and local news and see if fake news tend to spread or to stay local.

## Methods

To see the similarities in Wikipedia articles across different languages, we create a pseudo-bag of words for the titles of the equivalent Wikipedia pages about COVID-19 parsed from the Multi_lang_COVID_misinformation. We clean the links, separating the words and removing stopwords and words that are over present, and then we count the number of unique words, along with their number frequency to create word clouds for each language.

In order to quantify better the relationship between languages, we can construct chord plots with the thickness of the chords tying two languages that is proportional to a given overlap metric. We propose two possibilities to study the overlap between these languages.
The first is through the count of shared articles between languages.
The second is through an evaluation of the Jaccard similarity of BoWs built for each language out of the titles of articles which were found to have an english equivalent. The Jaccard similarity for the pairs of languages is the size of the intersection divided by the number of words in the union of the two sets.
We also investigate the articles which had no english equivalent by calculating what proportion of articles they represented out of all referenced articles.


## What are the hot topics for different languages?  

We created these words clouds that represent the most frequent words from the titles of wikipedia pages about COVID misinformation for 9 different languages. 




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

  <button onclick="showLanguage('en')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">English</button>

  <button onclick="showLanguage('es')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Spanish</button>

  <button onclick="showLanguage('fr')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">French</button>

  <button onclick="showLanguage('it')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Italian</button>

  <button onclick="showLanguage('ar')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Arab</button>

  <button onclick="showLanguage('de')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">German</button>

  <button onclick="showLanguage('pt')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Portuguese</button>

  <button onclick="showLanguage('ru')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Russian</button>

  <button onclick="showLanguage('zh')" style="background-color: #934A5F; color: #F1F1F1; font-family: 'Helvetica Neue', 'Helvetica'; width: 100px; height: 40px; border-radius: 20px; box-shadow: none;">Chinese</button>


</div>


<script>
  function showLanguage(language) {
    // Reset all buttons to the default style
    document.getElementById('engButton').classList.remove('active-button');
    document.getElementById('esButton').classList.remove('active-button');
    document.getElementById('frButton').classList.remove('active-button');
    document.getElementById('itButton').classList.remove('active-button');
    document.getElementById('arButton').classList.remove('active-button');
    document.getElementById('deButton').classList.remove('active-button');
    document.getElementById('ptButton').classList.remove('active-button');
    document.getElementById('ruButton').classList.remove('active-button');
    document.getElementById('zhButton').classList.remove('active-button');


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
  <script>
    var baseurl = '{{ site.baseurl }}';
  </script>
</div>



Of course, Covid-19 is the most frequent word, and we can use it as baseline to compare the frequency of the other words. In fact, for certain words all the other words are a lot less frequent and with similar frequency. Interestingly, for Spanish, French, and German the biggest words are 'The Times', 'Le monde', and 'United States' respectively. 'conspiracy' and 'Trump' have the second place in frequency. Some words we can see that are always present, like 'China', 'vaccine', 'news', but with variable frequency.
In order to quantify better the relationship between languages, we can construct a chord plot with the thickness of the chords tying two languages that is proportional to the overlap of words between the two languages.

## Are there cultural differences between popular fake news or do they overlap?


The chord plot down below shows the overlap in words between languages.

{% include_relative /plots/chord_diagram.html %}


To remove the size effect given by the very different number of words and number of links found, we compute the Jaccard similarity between languages. In the image just below we can find this value (percentage of overlap) for every pair of language. In green we can see the values above 0.15, while in red are shown the values below 0.1.

<div style="display: flex; align-items: center;">
  <div style="width: 50%;">
    <img src="{{ site.baseurl }}/blog/jaccard_lang.png" alt="" style="width: 100%;" />
  </div>

  <div style="width: 50%; padding-left: 20px;">
    <p>
     
Now we see that the higher overlap is for Arab-Chinese and Arab-Italian, with 25% Jaccard similarity, while the lowest is for English-Portuguese, Spanish-Italian, Spanish-Arab, Spanish-Chinese (only 7%). Intersection with Portuguese are also quite low (always below 13%). It would seem that Spanish and Portuguese are isolated clusters of news, which are rather local and not so international.


    </p>
  </div>
</div>



{% include_relative /plots/127.0.0.1.html %}


<script src="{{ site.baseurl }}/assets/script.js"></script>


**Conclusion**




