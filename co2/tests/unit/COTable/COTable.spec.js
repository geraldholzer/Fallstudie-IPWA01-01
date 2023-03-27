import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import CoTable from '@/components/COTable.vue'
// const assert = require('chai').assert;
// const co = require('C:\\Users\\gerin\\OneDrive\\Desktop\\Codeblocks\\Javascript\\co2\\co2\\src\\components\\COTable');



describe('COTable.vue',  () => {
  it('Ascending property Startzusstand false',async () => {

    const wrapper = shallowMount(CoTable);
    expect(wrapper.vm.ascendingland).to.be.false;
   
})
it('Ändern der ascending property bei drücken des Sort-Buttons',async () => {

  const wrapper = shallowMount(CoTable);
  const button = wrapper.findAll('button').at(0);
  await button.trigger('click');
  expect(wrapper.vm.ascendingland).to.be.true;
  await button.trigger('click');
  expect(wrapper.vm.ascendingland).to.be.false;
});
it('Zeit zum sortieren muss unter 100ms liegen',async()=>{
  const wrapper = shallowMount(CoTable);
  const button = wrapper.findAll('button').at(0);
  await button.trigger('click');
}).timeout(100)
})