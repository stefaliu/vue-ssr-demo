import { mount } from '@vue/test-utils'
import UiButton from '@/components/ui/ui-button'

describe('Ui Button', () => {
  it('sets type', () => {
    const wrapper = mount(UiButton, {
      propsData: {
        type: 'light'
      }
    })
    expect(wrapper.vm.type).toBe('light')
  })

  // it('clicks', () => {
  //   const wrapper = mount(UiButton, {
  //     propsData: {
  //       type: 'light'
  //     }
  //   })
  //   const vm = wrapper.vm
  //   wrapper.trigger('click')
  //   expect(vm.$el.querySelector('.hello h1').textContent)
  //     .toEqual('Welcome to Your Vue.js App')
  // })
})
