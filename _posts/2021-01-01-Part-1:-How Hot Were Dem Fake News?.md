

---

In this initial section we will try to identify where Wikipedia articles related to fake news stand in the general huge landscape of Wikipedia articles. Especially, we are interested to see if there was a spike of interest for fake news during COVID, (and in particular for fake news regarding COVID). Of course the causes of this phenomenon could be multiple and are not easy to determine. However, by normalising the data with respect to the normalcy (COVID general increase in views during the pandemic) we can at least attenuate the effects of boredom. In fact, we know that people started being more on the internet during the lockdown, and also wikipedia general views boosted.

## Methods
Using Wikimedia's API we were able to extract the number of views per day for a defined set of articles. Using this information, we got the percentage of increase of 2020 wikipedia article compared to 2018. Consequently, we do the difference between the views in 2020 and 2018, divided by the average daily value of article in 2018.

Data Grouping: We segregate the data into two groups - "Before Lockdown," where we consider the comparative increase before the lockdown, and "In Lockdown," where we analyze the comparative increase during the lockdown. Subsequently, we conduct a regression analysis between the two groups to identify any significant differences.

Analysing in more depth the different COVID misinformation main categories, we use difference in differences method to study the effect of mobility changepoints on a treatment group (views in 2020) vs. a control group (views in 2019 or 2022). Subtracting the 2019 difference from the 2020 difference (yielding the “difference in differences”) thus removes changes that would have occurred even without an intervention.  


## Is there a statistically significant increase in views for fake news pages compared to other articles in Wikipedia?

To investigate this, we compare the relative increase in pages before and during the first COVID lockdown period (March 2020 to May 2020) by analysing the evolution of interest in fake news articles. We aim to differentiate the increase that cannot be explained solely by the overall rise in Wikipedia usage.

Initially, we calculate the percentage increase in Wikipedia views compared to the baseline of 2018. Additionally, we determine the percentage increase in Wikipedia conspiracy theory views compared to 2018. Next, to isolate the increase specifically related to fake news, we subtract the increase in conspiracy theory views from the overall Wikipedia increase for each day. This provides us with the comparative increase in Wikipedia articles related to fake news.

<div style="display: flex; align-items: center;">
  <div style="width: 50%;">
{% include_relative /plots/figure1.1.html %}
</div>

  <div style="width: 100%; padding-left: 150px;">
    <p>
     
From the box plot, we see that before the lockdown, conspiracy theories had a median increase in attention of 16% above the global Wikipedia augmentation in views, and during the lockdown, it went up to 68%. Furthermore, we observe that the increase is significant, as the boxplots barely overlap each other.

    </p>
  </div>
</div>

The linear regression between the two groups confirms statistical significance, with p=0.00 (0.00% chance to get this result from the null hypothesis). The coefficient (Coeff) of 0.482 implies a 48.2% augmentation in views, and the R-squared value of 0.692 indicates that the lockdown explains most of the variance. 


## Did people's interests shift from before to after the lockdown?

We clustered the fake news into different categories and plotted them in a pie chart representing the variation before, during, and after lockdown. For the before lockdown period, we considered the average views from January 5th to January 10th. During the lockdown period, we considered the average from April 5th to April 10th. After the lockdown, we considered the average from May 30th to June 3rd.
<div class="image">
                        <img src="{{ site.baseurl }}/blog/1_pie_charts.jpg" alt="" style="width: 100%;"/>                      
</div>
We observe an increase from 2.2% to 3% during the lockdown, followed by a decrease to 1.3% in health-related fake news. There is a significant increase in regional fake news from 19% to around 40%, and a decrease in death and disappearance-related fake news (20% during the lockdown).
A very similar analysis to the one done before was done to study if there is a significant increase in interest in COVID-related fake news with respect to all fake news, indeed we found that this is the case.

To study this phenomenon more closely, we introduce a new dataset: the COVID-19 misinformation dataset. To build it, we parsed the COVID-19 misinformation page and extracted the articles referenced inside each paragraph. We construct six main categories: Virus origin, Incidence and mortality, Disease spread, Prevention, Treatment, and Vaccine misinformation. We ensure to keep only the relevant articles through feature analysis.
With this, we can do a Difference in Differences method by main category of fake news and quantify the shift in interest per category. In this way, we can quantify the impact of mobility on the activity on Wikipedia. For the method we extracted only the data 20 days before (pre) and 20 days after the mobility changepoint (post) for both control and treatment groups to assess its impact on the increase of visits.
From this method we obtained the corresponding increase in pageview as percentage. You can see this relative increases for English for 2020 with respect to 2019 and for 2022 with respect to 2020 in the following plot. Note that the relative change for 2022 are plotted as absolute values to compare magnitude in change. But the actual values for the 2022 control are negative (decreased from 2020).

{% include_relative /plots/diff_antonio.html %}

This allows us to quantify the variability in interest, meaning that the categories with a higher relative change were the focus of attention. For instance, for English pageview count we found that the Prevention category had the highest increase in 2020 (with regards to 2019). This was equal to 199%, while the Virus origin has the biggest decrease 2022 (with regards to 2020) being 284%.
This is similar to the trends seen in the piecharts above.



**Conclusions**

We could prove that indeed there is a significant increase in attention in fake news from before vs. during the lockdown, and especially in COVID-related fake news. Regarding the themes that sparked the most interest, prevention and mortality are in the first places.




