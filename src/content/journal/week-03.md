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


