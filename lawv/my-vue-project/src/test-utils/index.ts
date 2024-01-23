
/* 

import { render } from '@testing-library/vue';
//这是什么意思？
const customRender=<T>(ui: T,options={})=>{
  render(ui,{...options})
};

//为什么这样导出？
export * from '@testing-library/vue';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render } */



import { render } from '@testing-library/vue'
const customRender = <T>(ui: T, options = {}) => render(ui, {
    ...options
  })
export * from '@testing-library/vue'
export { default as userEvent } from '@testing-library/user-event' // override render export
export { customRender as render }
