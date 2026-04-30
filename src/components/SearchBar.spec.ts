import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { NInput } from 'naive-ui'
import SearchBar from '@/components/SearchBar.vue'

describe('SearchBar', () => {
  describe('Component', () => {
    it('renders an input with the correct placeholder', () => {
      const wrapper = mount(SearchBar)

      const input = wrapper.findComponent(NInput)

      expect(input.exists()).toBe(true)

      expect(input.props('placeholder')).toBe('Enter Spell')
      expect(input.props('size')).toBe('large')
      expect(input.props('round')).toBe(true)
    })

    it('contains the native input element', () => {
      const wrapper = mount(SearchBar)

      const nativeInput = wrapper.find('input')
      expect(nativeInput.element.placeholder).toBe('Enter Spell')
    })
  })
})
