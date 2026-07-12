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
      <div style="font-weight:600;">{{ piece.title }}</div>
      {% if piece.date %}<div style="margin-top:0.4rem; color:var(--color-text-secondary); font-family:var(--font-mono); font-size:0.85rem;">{{ piece.date | date: "%B %Y" }}</div>{% endif %}
    </a>
  </li>
{% endfor %}
</ul>
