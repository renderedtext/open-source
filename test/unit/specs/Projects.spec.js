import Vue from 'vue'
import Projects from '@/components/Projects.vue';

describe('Projects.vue', () => {
  it('has a created hook', () => {
    expect(typeof Projects.created).toBe('function')
  });

  it('should render correct contents', () => {
    const Constructor = Vue.extend(Projects);
    const vm = new Constructor().$mount()

    expect(vm.msg)
      .toEqual("Welcome to Your Vue.js App");
  });
});
