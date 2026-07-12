---
layout: page
title: "Science communication"
permalink: /science-communication/
---

<p class="empty-state">My science communication pieces and essays. Click through for full text and images.</p>

<ul class="card-grid">
{% assign sorted = site.writing | sort: 'date' | reverse %}
{% for piece in sorted %}
  <li class="card">
    <a href="{{ piece.url | relative_url }}">
      <div class="card__title">{{ piece.title }}</div>
      {% if piece.date %}<div class="card__meta">{{ piece.date | date: "%B %Y" }}</div>{% endif %}
    </a>
  </li>
{% endfor %}
</ul>
