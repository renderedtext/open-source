'use strict'

let appRoot = new Vue({
  el: "#app-root",
  data: {
    rawProjects: [],
    projectsCount: 0
  },

  computed: {
    projects: function() {
      const projects = this.rawProjects.map(p => {
        return {
          name: p.name,
          starCount: p.stargazers_count,
          url: p.html_url
        }
      });

      return projects.sort((a,b) => b.starCount - a.starCount);
    }
  },

  created() {
    const topic = "topic:semaphore-open-source"
    const fork = "fork:true"
    axios
      .get(`https://api.github.com/search/repositories?q=${topic}+org:renderedtext+${fork}`)
      .then(response => {
        const data = response.data

        this.rawProjects = data.items
        this.projectsCount = data.total_count
      })
  }
})
