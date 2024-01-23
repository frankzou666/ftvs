import { render, screen } from '../../../test-utils/index'
import { describe, it, expect } from 'vitest'
// import reference to our interface



import { ItemInterface } from '../../..//models/items/Item.interface' // import reference to your Item component:
import ItemComponent from './Item.component.vue'


describe('Item.component: rendering', () => {
    it('renders an Item text correctly11', () => {
        const model: ItemInterface = {
            id: 1,
            name: 'Unit test item 1',
            selected: false
        }
        const testid = 'unit-test-appearance-1'
        // render component
        render<typeof ItemComponent>(ItemComponent, {
            props: {
                testid,
                model
            }
        })
        // get element reference by testid
        const liElement = screen.getByTestId(testid)
        expect(liElement).not.toBeNull()
        expect(liElement.innerHTML).toContain('Unit test item 1')
    })
})