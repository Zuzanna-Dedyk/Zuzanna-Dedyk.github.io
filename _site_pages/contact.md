---
layout: page
title: Contact
---

**Email:** [{{ site.author.email }}](mailto:{{ site.author.email }})
---
{% if site.author.affiliations %}
**Affiliations:**
<ul class="author-affiliations">
  {% for affiliation in site.author.affiliations %}
    <li><a href="{{ affiliation.url }}" target="_blank" rel="noopener noreferrer">{{ affiliation.name }}</a></li>
  {% endfor %}
</ul>
{% else %}
**Affiliation:** {{ site.author.institution }}
{% endif %}

<ul class="social-links social-links--home">
  {% include social-links.html %}
</ul>
