
---

Now that we have proven than Wikipedia is actually a good tool to study the phenomenon of fake news, we want to study the relationship between COVID Wikipedia pages for different languages. Since the Wikipedia pages in different languages don't have the same structure (so we cannot compare main headings), we want to analyse the links they refer to. What kind of overlap is there between each language? In this way we can see the differences between global and local news and see if fake news tend to spread or to stay local.

## Methods

To see the similarities in Wikipedia articles across different languages, we create a multilingual version of the COVID-19 misinformation dataset, with the links of pages for 9 different languages (English, French, Italian, Spanish, German, Arab, Portuguese, Russian, and Chinese). We also fetch the english version of the newfound links (if existing).

After an initial analysis, a pseudo-bag of words was created from the titles of the english version of the pages for every language. We clean the links, separating the words and removing stopwords and words that are over present, and then we count the number of unique words, along with their number frequency to create word clouds for each language.

In order to quantify better the relationship between languages, we can construct chord plots with the thickness of the chords tying two languages that is proportional to a given overlap metric. We propose two possibilities to study the overlap between these languages.
The first is through the count of shared articles between languages.
The second is through an evaluation of the Jaccard similarity of BoWs built for each language out of the titles of articles which were found to have an english equivalent. The Jaccard similarity for the pairs of languages is the size of the intersection divided by the number of words in the union of the two sets.
We also investigate the articles which had no english equivalent by calculating what proportion of articles they represented out of all referenced articles.


## What are the hot topics for different languages?  


As a preliminary analysis, we plot the percentage of Wikipedia pages that have an english version, along with the percentage of those who are present only in the native language and the average overlap of links between languages.

{% include_relative /plots/127.0.0.1.html %}

We can see that the percentage of articles which are present only in the original language range from 0 to 20% (maximum value for German). Interestingly, Arab has almost all articles present in the English version, and also has the biggest overlap with the other languages. This could be explained by Arabic being a widely spoking languages under a lot of different influences which leads it to be more impacted by mainstream news and have less focus on local and specific fake news. For the other languages we see a similar average overlap, except for Spanish and Portuguese, suggesting more localized content or distinct beliefs. For example, the Spanish page references incidents in Spain and Brazil not found in the English version and conspiracy theories targeted at Covid being a lab release from the united states which indicates potential regional influences and slightly divergent perspectives (compared to the mainstream beliefs).

While this graph doesn't tell us about the extent of the spread of misinformation in the countries which use the language, it certainly tells us about how exhaustive the work of Wikipedia Moderators was while trying to report Covid related fake news. This could be in turn interpreted as the general sense of urgency and consideration of Fake news as a whole.

To better visualise in what topics the pages for different languages are similar or different, we created word-clouds that contain the most frequent words from the titles of wikipedia pages about COVID misinformation.


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

The chord plot down below shows the number of overlapping words between pairs of languages. This shows us the paths from one language to the other. By hovering over the chord plot, we can see that there is a big overlap between English, Spanish, Portuguese and the other languages (thickness of chords leaving these zones), while for the local languages there are many small streams that connect to other languages. This might seem logical, but we need to take into consideration that there is a big size effect given by the total number unique words per language, which are lower for the three international languages just mentioned. This can therefore skew our analysis.

{% include_relative /plots/chord_diagram.html %}


To remove the size effect given by the very different number of words and number of links found, we compute the Jaccard similarity between languages. In the image just below we can find this value (percentage of overlap) for every pair of language. In green we can see the values above 0.15, while in red are shown the values below 0.1.

<div style="display: flex; align-items: center;">
  <div style="width: 50%;">
    <img src="{{ site.baseurl }}/blog/jaccard_lang.png" alt="" style="width: 100%;" />
  </div>

  <div style="width: 50%; padding-left: 20px;">
    <p>
     
Now we see that the higher overlap is for Arab-Chinese and Arab-Italian, with 25% Jaccard similarity, while the lowest is for English-Portuguese, Spanish-Italian, Spanish-Arab, Spanish-Chinese (only 7%). Intersection with Portuguese are also quite low (always below 13%). It would seem that Spanish and Portuguese are isolated clusters of news, which are rather local and don't share many topics with the other languages. This effectively proves what we already deduced from the preliminary analysis of the histograms.


    </p>
  </div>
</div>




<script src="{{ site.baseurl }}/assets/script.js"></script>


**Conclusion**

Even if this part is more qualitative than the others, it is still a solid analysis giving us insights in overlapping COVID-related topics for different languages. Through the metric of Jaccard Similarity, we effectively could infer that Spanish and Portuguese are isolated languages that don't have many topics in common with the other languages. This was not expected, as they are languages spoken in many different countries. 




