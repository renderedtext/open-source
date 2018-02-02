<template>
  <div id="app">
    <img class="cover" src="./assets/cover.png">

    <div class="intro-box">
      <h1>Semaphore ❤️ Open Source</h1>
      <p align="center" class="intro">
      At Semaphore, we believe that open source is good for everyone. By being
      open and freely available, it enables and encourages collaboration and the
      development of technology, while solving real world problems.
      </p>
    </div>

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

.intro {
  margin: 20%;
}
</style>
