import {expect, test} from '@playwright/test';

test.beforeEach(async({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();

});

test('Assertions', async({page})=> { 

    const basicFormSelectionButton = page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button')
    //General Assertions
    const value = 5
    expect(value).toEqual(5)

    const submitButtonText = await basicFormSelectionButton.textContent()
    expect(submitButtonText).toEqual('Submit')

    // Locator Asserstion
    await expect(basicFormSelectionButton).toHaveText('Submit')

    //soft assertion
    await expect.soft(basicFormSelectionButton).toHaveText('Submit')
    await basicFormSelectionButton.click()

    // Locator Assertions(preferred) are more stable and they wait for the element to load dynamically when compared to General Assertions
})