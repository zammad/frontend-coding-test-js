import { shallowMount } from '@vue/test-utils'
import LayoutMain from '@/components/layout/LayoutMain.vue'


test('Hello', () => {
  // render the component
  const wrapper = shallowMount(LayoutMain)
  expect(wrapper.find('nav').exists()).toBe(true)
  expect(wrapper.find('router-view').exists()).toBe(true)

})