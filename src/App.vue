<template>
  <div id="app">
    <img class="cover" src="./assets/cover.png">

    <h1>Semaphore ❤️ Open Source</h1>

    <div class="projects">
      <Projects/>
    </div>
  </div>
</template>

<script>
import Projects from './components/Projects';

export default {
  name: 'App',
  components: {
    Projects,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.cover {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
