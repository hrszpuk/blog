---
---
// Hacky solution, will fix later ~ hrs
const postContent = `{% for post in site.posts %}
        <article class="article">
          <h2 class="article-title">
            <a href="{{site.baseurl}}{{post.url}}"> {{post.title}} </a>
          </h2>
          <small class="date">{{post.date | date_to_string}}</small>
          <div class="categories">
            {% for c in post.categories %}
            <a href="#!" data-base-url="{{site.baseurl}}" class="category"
              >{{c}}</a
            >
            {% endfor %}
          </div>
        </article>
        {%endfor%}`;

const projectContent = `{% for project in site.projects %}
        <article class="article">
          <h2 class="article-title">
            <a href="{{site.baseurl}}{{project.url}}"> {{project.title}} </a>
          </h2>
          <small class="date">{{project.date | date_to_string}}</small>
          <div class="categories">
            {% for c in project.categories %}
            <a href="#!" data-base-url="{{site.baseurl}}" class="category"
              >{{c}}</a
            >
            {% endfor %}
          </div>
        </article>
        {%endfor%}`;

function setContent(usePostList) {
  document.getElementsByClassName("articles")[0]
    .innerHTML = usePostList ? postContent : projectContent;
}