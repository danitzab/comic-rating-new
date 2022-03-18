import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('tests in the Header components', () => {
  test('should render the component correctly', () => {
    const wrapper = shallowMount(Header);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
