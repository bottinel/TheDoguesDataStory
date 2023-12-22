
---

Wikipedia is one of the most accessed information websites. People mostly look up topics related to the matter they are researching but during the pandemic it also become an important ally to learn and check content about different events or specifical knowledge or simply consult some article to fight against boredom. Recently, one of the topics that was on everyone’s mind was the spread of fake news online. During the COVID lockdown, a period where everyone was home alone, speculations rose, and so did online gossip. In this initial section we will try to identify where Wikipedia articles related to fake news stand in the general huge landscape of Wikipedia articles. Specially, we are interested to see if there was a spike of interest for fake news during covid. Of course the causes of this phenomenon could be multiple and are not easy to determine. However, by normalising the data with respect to the normalcy (covid general increase in views during the pandemic) we can at least attenuate the effects of boredom. In fact, we know that people started being more on the internet during the lockdown, and also wikipedia general views boosted. Finally, we go deeper to quantify the impact of the the mobility reduction in wikipedia pageview count. 

## Data exploration
Using wikipedia's API we were able to extract the number of views per day for a defined set of articles. Using this information,we got the percentage of increase of 2020 wikipedia article compared to 2018. Consequently, we do the difference between the view in 2020 and 2018 then the divide the by the average daily value of article in 2018.For example to know the increase in views of wikipedia article for the 15th february 2020. We do

$$ \text{Percentage of Increase 15 February 2020} = \frac{\text{Views}(({\text{15th February 2020}}) - \text{Views}(({\text{15th February 2018}})}{\text{Average Daily Views}}$$


On the other side, we use difference in difference method to assess an experimental design with observational data by studying the effect of a treatment ( mobility changepoints) on a treatment group vs. a control group. For this case, our treatment group is the number of visits of previously selected and cluster of the wikipedia articles during 2020, while our control groups correspond to the same articles but tracking the number of visits from 2019 and 2022. Subtracting the 2019 difference from the 2020 difference (yielding the “difference in differences”) thus removes changes that would have occurred even without a intervention (assuming 2020 would otherwise have like 2019) and gives a better estimate of the treatment.  




## Is there a statistically significant increase in views for fake news pages compared to other articles in Wikipedia?

To investigate this, we compare the relative increase in pages before and during the first COVID lockdown period (March 2020 to May 2020) by analyzing the evolution of interest in fake news articles. We aim to discern the increase that cannot be explained solely by the overall rise in Wikipedia usage, using the difference-in-difference method for this analysis.

Initially, we calculate the percentage increase in Wikipedia views compared to the baseline of 2018. Additionally, we determine the percentage increase in Wikipedia conspiracy theory views compared to 2018.

Next, to isolate the increase specifically related to fake news, we subtract the increase in conspiracy theory views from the overall Wikipedia increase for each day. This provides us with the comparative increase in Wikipedia articles related to fake news.

Data Grouping: We segregate the data into two groups - "Before Lockdown," where we consider the comparative increase before the lockdown, and "In Lockdown," where we analyze the comparative increase during the lockdown. Subsequently, we conduct a regression analysis between the two groups to identify any significant differences.


{% include_relative /plots/figure1.1.html %}

From the box plot, we see that before the lockdown, conspiracy theories had a median increase in attention of 16% above the global Wikipedia augmentation in views, and during the lockdown, it went up to 68%. Furthermore, we observe that the increase is significant, as the boxplots barely overlap each other.

The linear regression between the two groups confirms statistical significance, with p=0.00 (0.00% chance to get this result from the null hypothesis). The coefficient (Coeff) of 0.482 implies a 48.2% augmentation in views, and the R-squared value of 0.692 indicates that the lockdown explains most of the variance.

## Where people interested in the same type of fake news changed??

We clustered the fake news into different categories and plotted them in a pie chart representing the variation before, during, and after lockdown. For the before lockdown period, we considered the average views from January 5th to January 10th. During the lockdown period, we considered the average from April 5th to April 10th. After the lockdown, we considered the average from May 30th to June 3rd.

<div class="image">
                        <img src="{{ site.baseurl }}/blog/1_pie_charts.jpg" alt="" />
                             

</div>


We observe an increase from 2.2% to 3% during the lockdown, followed by a decrease to 1.3% in health-related fake news. There is a significant increase in regional fake news from 19% to around 40%, and a decrease in death and disappearance-related fake news (20% during the lockdown).

## Can the augmentation in health-related fake news come from the growing interest in COVID fake news? ##

However, many COVID-related articles were created later during the COVID period, so we chose to introduce a new dataset: the COVID-19 misinformation dataset. To build it, we parsed the COVID-19 misinformation page and extracted the articles referenced inside each paragraph. This enables us to track the interest in COVID-related fake news by observing the evolution of interest in articles related to COVID fake news that existed before the pandemic.

Similar to the previous part, we applied the same difference-in-difference method to compare the increase in COVID-19 related fake news with the increase in overall Wikipedia views.

{% include_relative /plots/figure_1.3.html %}

Furthermore, the rise in attention towards COVID-related fake news is even more substantial with an R-squared value of 0.470, P-value of 0.00, and coefficient of 0.9986. This indicates that there is around a 100% increase in attention towards COVID-19 conspiracy articles.


By applying a linear regression for the difference in difference method we were able to quantify the impact of the mobility change in the pageview count 

With an R-squared of 0.470, a P-value <0.05 and a coefficient of ~1. Wich means we have around a 100% increase in average and it can't be explained by the null hypothesis

In this part, we focus in quantifying the impact of the change mobility point for English (EN) , Spanish (ES), French (FR) and Italian (IT) wikipedia articles on the activity tracked by wikipedia. We do a cluster based analysis. This means that we grouped the wikipedia links in general categories, for instance, for English wikipedia articles we analyzed: ['Virus origin', 'Incidence and mortality', 'Disease spread', 'Prevention', 'Treatment',"Vaccine misinformation"] for two different control groups: 2019 and 2022.

Additionally, we extracted only the data 20 days before (pre) and 20 days after the mobility changepoint (post) for both groups (control and treatment groups) to assess its impact in the increase of visits. With this in mind, we also translated the each one of the Periods (pre or post) and the Treatment (treated or control) into 0 and 1 to allows fit a linear model using the logarithm of the visits.

We realized that we actually obtain a good linear fitting since we have in most of the regression analysis we obtained a value of $R^2$ bigger than 0.90, which explains 90% of the variance of the model. Finally, we obtained the corresponding increase in pageviews as coefficient (e^{coeff}). You can explore this relative increases for different laguages adn for 2019 with respect to 2020 and for 2022 with respect to 2022 in the following interactive plot. 

{% include_relative /plots/figure_1.3.html %}

We realized that this relative change allow us to quantify the change in interest, meaning that the categories with a higher relative change were the light of attention of the people in analyzed period of time. For instance: for English pageview count we found that the Prevention category had the highest increase in 2019 while the Virus origin has the biggest relative change for 2022. In the same way, for English pageview count we found that the Medical situations category had the highest increase in both years, 2019 and 2022. Subsequently,  for French pageview count we found that the Desinformation by country and geographic sectors category had the highest increase in 2019 and 2022, with an interesting increase in the International popular consipiracy theories. Finally, for Italian we realized that most of the categories have the same relative change, being the one with the highest relative change the Health desinformation category for 2019 and the Denialist theories the biggest one for 2022.

It's worth to stressing that the relative change for 2022 is actually a decrease. It is important to notice that we do not really have categories among languages that are 100% identical, since in cases as Italy the topics are very country-related.
<script src="{{ site.baseurl }}/assets/script.js"></script>


**Conclusion**

we realized we had significant increase and even the creation of new articles in wikipedia. In general we observed an increase of 50% in pageview count before the lockdown and 173% after the lockdown. 
On the other side, we we able to allocate different covid related articles in categories. This process was generalized for four languages: English, Spanish, French and Italian, obtaining the relative increase of views from 2020 with respect to 2019 and the relative decrease of views of 2022 with respect to 2020. 

Interestingly, we realized that the absolute relative change was bigger in almost all the categories for in the analysis from 2020 to 2022, which lead us to the question: are we start to forget the nightmare?




