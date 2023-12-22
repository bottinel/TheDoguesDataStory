---
Now that we explored in depth the Wikipedia fake news and conspiracy theory landscape, and prove that indeed it it was a hot topic of interest, what can we say about Wikipedia as a tool to study covid misinformation? To prove this we try to make a comparison between Wikipedia and fake news articles about COVID that were published on the web. If we find that most of the articles can be categorised by the topics labeled as misinformation from Wikipedia, then we can say that Wikipedia is indeed a good tool to analyse fake news and theories on the subject. What is even more interesting, is that we can analyse the evolution of interest related to a certain topic (page view count) in time. Managing to prove a causation between wikipedia interest and fake news publication is almost impossible because of the uncountable confounders that play a role in wikipedia visits. However, having access also to the dates of publications of fake news, we want to see if we find a correlation between the two.


## Methods
From the Fake News Topics defined in Part 1, we use the subtitles and sub-subtitles of each main category from the wikipedia article to build a bag of words (bow) to classify the web news dataset. With this, we have a bag of words for each main heading which represents the topics covered. 
We then classify around 2000 fake news articles into the six categories if the claim (short description of the piece of news) contains words from the BoW (note that a piece of news can be classified into more than one category).

We plot a weighted average of the viewcounts from the selected articles next to the daily article release trend of the news dataset
We then measure the correlation between the two trends to show that release and wikipedia interest are also linked.
Going deeper in depth, we leverage the pre existing wikipedia article structure to perform an analysis of Fake News interest according to our Fake News topics. We plot two kinds of graphs: one which highlights the relative speed of viewcount increase (virality) compared to the wikipedia baseline, and one which highligts the relative increase (popularity) compared to the wikipedia baseline. 
Virality (speed of viewcount increase): For this, we evaluate the global trend of article views from the Aggregated timeseries dataset by convolving a derivative filter along the total view count of articles and then applying a min max normalization. We then apply the same process for each article. We then substract the global trend from the article trend. This highlights the difference in virality between the considered article and the general virality of articles on wikipedia. For each Fake news topic, we then aggregate all of their linked articles through a weighted sum (coefficients based on article mean views ver selected period / sum of article mean views).
Popularity (percentage of viewcount increase): The process is the exactly the same but we do not apply the derivative filer and proceed straight to min max normalization.


## What is the relationship between fake news published on the web and the topic labeled as misinformation on Wikipedia?

First we look at the news dataset and we try to cluster them into categories. After classification, we managed to classify 85% of our news! This value is highly dependant on the words that we exclude from the bag of words (covid, 2020, etc.). In fact, if we leave all the words this value increases to 100%. It is highly subjective on which words are most useful to keep or those that skew our frequencies and need to be removed.

Now let's see how the classification looks like. We must keep in mind that each piece of news can be classified in many categories. Therefore, when plotting, when we sum the percentage of classified news for every main heading, the total will be more than 100%.

<div class="image">
                        <img src="{{ site.baseurl }}/blog/eng_pie/final_pies.png" alt="" />
                             

</div>

Many of these findings coincide with our expectations: for example, bio-weapon, scientist, and food are in the first positions in fake news about the origin of Covid, while bat, mask, and vaccine are in the top 4 for disease spread. Hydroxychloroquin seems to be the most important drug that is included in fake news about covid treatments. Interestingly, the words corresponding to vaccine misinformation are found in 70% of all fake articles, with "death" in the first position.


## Can we identify a storyline of interest towards different Fake News topics? 

First, we want to find if there is any correlation between the normalised numebr of vists and the normalized averaged number of news published in time. Consequently, we are going to test this correlation using Pearson and Spearman coefficient dividing the data in two parts: before the maximum and after the maximum.

<div style="display: flex; align-items: center;">
  <div style="width: 50%;">
    <img src="{{ site.baseurl }}/blog/correlation.png" alt="" style="width: 100%;" />
  </div>

  <div style="width: 50%; padding-left: 20px;">
    <p>

 
Before the maximum point: Pearson coefficient = 1.0, Spearman coefficient = 0.99.
This indicates a perfect positive linear relationship between the variables. This suggests that the variables (#news and # vists) move in closely witheach other.

After the maximum point: Pearson coefficient = 0.91, Spearman coefficient = 0.92.
The values after the maximum point still indicate a relatively strong positive correlation between the variables but are lower compared to the values observed before the maximum.

    </p>
  </div>
</div>


Now that we have proved that the viewcount is a good match of the topics and behaviours of fake news publications in time, we want to establish a storyline of fake news interest during the different phases of the pandemic. We plot first the *virality* (speed of viewpoint increase), and then the *popularity* (percentage of viewpoint increase) relative to the mobility.

The virality will allow us to discern the impact of each article by evaluating its rate of change in popularity relative to the normalized derivative of the Wikipedia view count, providing a more accurate measurement of its viral dynamics within the broader context of online content engagement.

While the popularity will allow us to discern how much it deviate from the Wikipedia trendline after normalization. Positive value means that the topic has a relative viewcount higher than the relative viewcount of Wikiepdia's. And therefore a greater interest in the topic


{% include_relative /plots/corr_2.html %}


In the 15 days before the first death, all the fake news topics were increasing and decreasing in the same way as Wikipedia. 

On the opposite, in the 15 days after, we observe another behavior, the fake news topics were increasing more than the COVID articles. This means that there was a greater interest in fake news in comparison to other subjects on Wikipedia.

At the lockdown mobility change point, Wikipedia increased way more than the fake news topics. That's why we see negative values. However, this happened only for 1 month; after that, the fake news topics were again increasing more than Wikipedia's articles by a constant amount!


{% include_relative /plots/corr_3.html %}

The topic has seen an increase in views after the lockdown. Therefore, there is a growing interest in the topic of fake news right after the lockdown. What's interesting to note is that the topics show increases at different timings. It starts with the spread, then the origin, prevention, treatment, the vaccine, concluding with incidence and mortality


**Conclusion**

The fake news dataset enables us to verify that the topics classified as Fake News on Wikipedia are representative of general media attention with an 85% match. This means that Wikipedia is a useful tool to study general media and user interest towards COVID-19 Fake News!
From there, we used the pageviews information to study the virality and popularity of each topic with regards to the norm. We observe that each topic is closely related and they move together.
It is also observed that mobility restrictions had a significant impact on our trends, with interest towards articles slowly rising after the first reported deaths, sinking dramatically after the beginning of lockdown, and then picking back up after the end of lockdowns. These observations show that Fake News mostly picked up when "regular" social contexts were in order, whereas when everyone was at home and not directly impacted by the disease, interest fell. 

