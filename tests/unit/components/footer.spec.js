import Vue from 'vue'
import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import Footer from '@/components/Footer.vue';

Vue.use(Vuetify)

const localVue = createLocalVue();

describe('module', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should do something', () => {
    const wrapper = mount(Footer, {
      localVue,
      vuetify,
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
