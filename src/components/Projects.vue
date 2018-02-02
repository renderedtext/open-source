<template>
  <div>
    <hr>
    <div v-for="project in projects" :key="project.id">
      <span>
        <a v-bind:href="project.url">{{ project.name }}</a>
        <p>
          ⭐️ {{ project.starsCount }}
          🍴 {{ project.forksCount }}
          <span v-if="project.license">
            📄 {{ project.license }}
          </span>
        </p>
        <p class="project">{{ project.description }}</p>
        <hr>
      </span>
    </div>
  </div>
</template>

<script>
import { get } from 'axios';

export default {
  name: 'Projects',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      rawProjects: [],
      projectsCount: 0
    };
  },
  computed: {
    projects: function() {
      const projects = this.rawProjects.map(p => {
        const license = p.license
        return {
          name: p.name,
          description: p.description,
          starsCount: p.stargazers_count,
          forksCount: p.forks_count,
          license: license && license.spdx_id,
          url: p.html_url
        }
      });

      return projects.sort((a, b) =>
        b.starsCount - a.starsCount
      );
    }
  },
  created() {
    const baseUrl = 'https://api.github.com';
    const search = '/search/repositories?q=';
    const topic = 'topic:semaphore-open-source';
    const organization = 'org:renderedtext';
    const fork = 'fork:true';

    get(`${baseUrl}${search}${topic}+${organization}+${fork}`)
      .then(response => {
        const data = response.data;

        this.rawProjects = data.items;
        this.projectsCount = data.total_count;
      })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.project {
  margin-left: 30%;
  margin-right: 30%;
}
hr {
  margin-left: 30%;
  margin-right: 30%;
}
</style>
