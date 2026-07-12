---
layout: page
title: "Publications"
permalink: /publications/
---

<p class="empty-state">A list of my peer-reviewed publications. Click any entry to view details, abstract, and associated figures.</p>

<ul class="card-grid">
{% assign sorted = site.publications | sort: 'year' | reverse %}
{% for pub in sorted %}
  <li class="card">
    <a href="{{ pub.url | relative_url }}">
      <strong class="card__title">{{ pub.authors }}</strong>
      <div class="card__title-sub"><em>{{ pub.title }}</em></div>
      <div class="card__meta">{% if pub.journal %}{{ pub.journal }}{% endif %}{% if pub.year %} · {{ pub.year }}{% endif %}</div>
    </a>
  </li>
{% endfor %}
</ul>
