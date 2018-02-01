'use strict'

let appRoot = new Vue({
  el: "#app-root",
  data: {
    rawProjects: [],
    projectsCount: 0
  },
  computed: {
    projects: function() {
      return this.rawProjects.map(p => p.name)
    }
  },

  created() {
    axios
      .get("https://api.github.com/search/repositories?q=topic:semaphore-open-source+org:renderedtext")
      .then(response => {
        const data = response.data

        this.rawProjects = data.items
        this.projectsCount = data.total_count
      })
  }
})
