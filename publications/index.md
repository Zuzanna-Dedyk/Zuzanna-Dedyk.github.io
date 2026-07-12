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
      <strong>{{ pub.authors }}</strong>
      <div style="margin-top:0.5rem;"><em>{{ pub.title }}</em></div>
      <div style="margin-top:0.5rem; color:var(--color-text-secondary); font-family:var(--font-mono); font-size:0.85rem;">{% if pub.journal %}{{ pub.journal }}{% endif %}{% if pub.year %} · {{ pub.year }}{% endif %}</div>
    </a>
  </li>
{% endfor %}
</ul>
