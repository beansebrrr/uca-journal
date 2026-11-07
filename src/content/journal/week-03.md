---
title: "\u201CWe are data scientists\u201D"
pubDate: 2026-10-30
week: 3
links:
  - label: Go to repository
    href: https://github.com/beansebrrr/uca-aic-notebooks/tree/main/week-03
---

This week, we focus a lot more on data and data analysis. Right away, we are thrown into the wringer by grabbing a dataset from [Kaggle](https://kaggle.com/), to be used alongside Python libraries like `pandas`, `matplotlib`, and `seaborn` among others.

But before we get started, we should prepare the data by...

# Cleansing

Datasets aren't always perfect. Sometimes there are <abbr title="typographical error">typo</abbr>s, input errors, or maybe the field is left blank altogether. This isn't ideal for a learning model that can only rely on the datasets which you give it. This is why it's always good practice to *cleanse* the data before handing it to a machine learning model.

When you import a dataset into your Python project using `pandas`, it will gain access to a plethora of *methods* and utilities; one of which is the `.fillna()` method. This goes through each cell in your *DataFrame* and fill out the cells that are either <abbr title="Not available">N/A</abbr> or <abbr title="Not a Number">NaN</abbr>.

But what can we fill the blank cells with? Usually, we should probably fill it with the average value of the entire column. We can do that quite easily thanks to *DataFrame*s having methods for calculating their median and median. We'll be filling them in with the median this time around, since means can get very easily affected by outliers.

---

Now that we've cleaned up the dataset, we can move on to actually going through the data.

There are many things we can do with this. We can use `pandas` to `.merge()` two databases together, we can add new *features*, or, you know, we can jump straight into creating graphics. 

# Plotting

We were introduced to a plethora of charts and graphs we can generate using `matplotlib` and `seaborn`. We've encountered histograms, scatterplots, boxplots, violin plots, heatmaps, and so much more. From what I see, `seaborn` focuses a lot more on charts and graphs, while `matplotlib` gives the programmer much more control on what to render in the first place.

## A little extra treat with `plotly`

`plotly` is another graphing library, and its main selling point is that, well, it already looks good. It supplies itself with pre-configured selection of charts and graphs we can choose from, and all we have to do is provide the data to it. It's generated as HTML, and is interactive right out of the box. 
