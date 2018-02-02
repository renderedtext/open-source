<template>
  <div>
    <div v-for="project in projects" :key="project.id">
      <span>
        <a href="project.url">{{ project.name }}</a>
        {{ project.starCount }}
        <p>{{ project.description }}</p>
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
        return {
          name: p.name,
          description: p.description,
          starCount: p.stargazers_count,
          url: p.html_url
        }
      });

      return projects.sort((a, b) =>
        b.starCount - a.starCount
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
</style>
