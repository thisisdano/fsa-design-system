---
layout: category
title: "Sitemap"
intro: ""
---

## Current

<nav>
  <div class="ds-sitemap">
    <ul class="ds-sitemap__list ds-sitemap__list--root" style="display: initial;">
      {% for link in site.data.navvy %}
        {% unless link.exclude_from_sitemap %}
        <li class="ds-sitemap__list-item ds-sitemap__list-item--root">
          <a class="ds-sitemap__link ds-sitemap__link--root" href="{{ site.baseurl }}{{ link.href }}">{{ link.title }}</a>
          {% if link.componentgroup %}
            <ul class="ds-sitemap__list">
              {% for group in link.componentgroup %}
                <li class="ds-sitemap__list-item">
                  <a href="{{ site.baseurl }}{{ link.href }}/#{{ group.title | downcase | replace: ' ', '-' }}">{{ group.title }}</a>
                  <ul class="ds-sitemap__list">
                    {% for subgroup in group.subcategories %}
                    <li class="ds-sitemap__list-item">
                      <a href="{{ subgroup.subhref | prepend: site.baseurl }}">
                        <span>{{ subgroup.subtitle }}</span>
                      </a>
                    </li>
                    {% endfor %}
                  </ul>
                </li>
              {% endfor %}
            </ul>
          {% else %}
            <ul class="ds-sitemap__list">
              {% for subpage in link.subcategories %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link" href="{{ site.baseurl }}{{ subpage.subhref }}">{{ subpage.subtitle }}</a>
                  {% if subpage.subhref contains 'guides/' %}
                    {% assign guide = subpage.subhref | replace:'guides/','guide_' %}
                    <ul class="ds-sitemap__list">
                    {% for article in site.data.[guide] %}
                      <li class="ds-sitemap__list-item">
                        <a class="ds-sitemap__link" href="{{ article.href | prepend: site.baseurl }}">
                          {{ article.title }}
                        </a>
                      </li>
                    {% endfor %}
                  </ul>
                  {% endif %}
                </li>
              {% endfor %}
            </ul>
          {% endif %}
        </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
</nav>

## Content Hidden

<nav>
  <div class="ds-sitemap">
    <ul class="ds-sitemap__list ds-sitemap__list--root" style="display: initial;">
      {% for link in site.data.navvy %}
        {% unless link.exclude_from_sitemap %}
        <li class="ds-sitemap__list-item ds-sitemap__list-item--root">
          <a class="ds-sitemap__link ds-sitemap__link--root" href="{{ site.baseurl }}{{ link.href }}">{{ link.title }}</a>
          {% if link.componentgroup %}
            <ul class="ds-sitemap__list">
              {% for group in link.componentgroup %}
                <li class="ds-sitemap__list-item">
                  <a href="{{ site.baseurl }}{{ link.href }}/#{{ group.title | downcase | replace: ' ', '-' }}">{{ group.title }}</a>
                  <ul class="ds-sitemap__list">
                    {% for subgroup in group.subcategories %}
                    <li class="ds-sitemap__list-item">
                      <a href="{{ subgroup.subhref | prepend: site.baseurl }}">
                        <span><span class="fsa-sr-only">{{ link.title }} / {{ group.title }} /</span> {{ subgroup.subtitle }}</span>
                      </a>
                    </li>
                    {% endfor %}
                  </ul>
                </li>
              {% endfor %}
            </ul>
          {% else %}
            <ul class="ds-sitemap__list">
              {% for subpage in link.subcategories %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link" href="{{ site.baseurl }}{{ subpage.subhref }}">
                    <span><span class="fsa-sr-only">{{ link.title }} /</span> {{ subpage.subtitle }}</span>
                  </a>
                  {% if subpage.subhref contains 'guides/' %}
                    {% assign guide = subpage.subhref | replace:'guides/','guide_' %}
                    <ul class="ds-sitemap__list">
                    {% for article in site.data.[guide] %}
                      <li class="ds-sitemap__list-item">
                        <a class="ds-sitemap__link" href="{{ article.href | prepend: site.baseurl }}">
                          <span class="fsa-sr-only">{{ link.title }} / {{ subpage.subtitle }} /</span> {{ article.title }}
                        </a>
                      </li>
                    {% endfor %}
                  </ul>
                  {% endif %}
                </li>
              {% endfor %}
            </ul>
          {% endif %}
        </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
</nav>

## Attributes

<nav>
  <div class="ds-sitemap">
    <ul class="ds-sitemap__list ds-sitemap__list--root" style="display: initial;">
      {% for link in site.data.navvy %}
        {% unless link.exclude_from_sitemap %}
        <li class="ds-sitemap__list-item ds-sitemap__list-item--root">
          <a class="ds-sitemap__link ds-sitemap__link--root" href="{{ site.baseurl }}{{ link.href }}">{{ link.title }}</a>
          {% if link.componentgroup %}
            <ul class="ds-sitemap__list">
              {% for group in link.componentgroup %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link" href="{{ site.baseurl }}{{ link.href }}/#{{ group.title | downcase | replace: ' ', '-' }}">{{ group.title }}</a>
                  <ul class="ds-sitemap__list">
                    {% for subgroup in group.subcategories %}
                    <li class="ds-sitemap__list-item">
                      <a href="{{ subgroup.subhref | prepend: site.baseurl }}" class="ds-sitemap__link" data-grandparent="{{ link.title }}" data-parent="{{ group.title }}">
                        {{ subgroup.subtitle }}
                      </a>
                    </li>
                    {% endfor %}
                  </ul>
                </li>
              {% endfor %}
            </ul>
          {% else %}
            <ul class="ds-sitemap__list">
              {% for subpage in link.subcategories %}
                <li class="ds-sitemap__list-item">
                  <a class="ds-sitemap__link" href="{{ site.baseurl }}{{ subpage.subhref }}">
                    {{ subpage.subtitle }}
                  </a>
                  {% if subpage.subhref contains 'guides/' %}
                    {% assign guide = subpage.subhref | replace:'guides/','guide_' %}
                    <ul class="ds-sitemap__list">
                    {% for article in site.data.[guide] %}
                      <li class="ds-sitemap__list-item">
                        <a class="ds-sitemap__link" href="{{ article.href | prepend: site.baseurl }}" data-grandparent="{{ link.title }}">
                           {{ article.title }}
                        </a>
                      </li>
                    {% endfor %}
                  </ul>
                  {% endif %}
                </li>
              {% endfor %}
            </ul>
          {% endif %}
        </li>
        {% endunless %}
      {% endfor %}
    </ul>
  </div>
</nav>
