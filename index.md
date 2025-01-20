---
layout: minimal
title: WEB 101
nav_exclude: true
seo:
  type: Course
  name: Web Programming
---

# {{ site.tagline }}
{: .mb-2 }
{{ site.description }}
{: .fs-6 .fw-300 }

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}


In this web development series, we will embark on a journey to explore the foundations of creating beautiful and functional websites from scratch. By learning HTML, CSS, and JavaScript, we will demystify the technologies that power the modern web and empower students to become creators of their digital presence. What could the future of the web look like if every individual had the tools to tell their story, share their ideas, and build a more connected, accessible, and inclusive digital world?


{% for module in site.modules %}
{{ module }}
{% endfor %}
