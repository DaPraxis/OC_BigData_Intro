---
layout: minimal
title: DATA 101
nav_exclude: true
seo:
  type: Course
  name: Big Data Programming
---

# {{ site.tagline }}
{: .mb-2 }
{{ site.description }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}


In this introductory data science series, we will embark on a journey to uncover the power of statistics and data visualization in understanding the world around us. By analyzing real-world datasets and creating interactive dashboards with Streamlit, students will learn to extract insights, tell compelling stories with data, and share their findings on the web. Imagine a future where data is used not only to solve problems but also to inspire action and create a more informed, equitable, and connected society. This course will empower students with the tools to make sense of data, build impactful projects, and confidently explore careers in data science and beyond.

{% for module in site.modules %}
{{ module }}
{% endfor %}
