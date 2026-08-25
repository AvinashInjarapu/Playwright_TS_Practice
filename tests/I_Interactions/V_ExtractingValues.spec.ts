import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Extracting text', async({page})=> {
    //extractung text from a locator
    const basicForm = page.locator('nb-card', {hasText: 'Basic form'});
    const submitButtonText = await basicForm.getByRole('button').textContent(); 
    console.log('Submit button text is: ' + submitButtonText);
    expect(submitButtonText).toEqual('Submit');

    //extracting multiple values
    const allRadioButtonValues = await page.locator('nb-radio').allTextContents();
    console.log('All radio button values are: ' + allRadioButtonValues);
    expect(allRadioButtonValues).toContain('Option 1');

    //extract input field value
    const emailInput = basicForm.getByRole('textbox', {name: 'Email'});
    await emailInput.fill('test@test.com');
    const emailInputValue = await emailInput.inputValue();
    console.log('Email input value is: ' + emailInputValue);

    // extract attribute value
    const emailPlaceholder = await emailInput.getAttribute('placeholder');
    console.log('Email input placeholder is: ' + emailPlaceholder);
})