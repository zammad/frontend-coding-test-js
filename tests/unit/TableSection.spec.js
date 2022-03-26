import { shallowMount } from '@vue/test-utils'
import TableSection from '@/components/TableSection.vue'

describe('TableSection.vue', () => {
  test('If loading is true', () => {
    expect(true).toBe(true)
  })
})

test('Hello', () => {
  // render the component
  const wrapper = shallowMount(TableSection)
  expect(wrapper.find('.table-section').exists()).toBe(true)
  expect(wrapper.find('#price-table').exists()).toBe(true)

})