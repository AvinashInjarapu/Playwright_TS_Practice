import { test } from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('User-visible locators', async({page}) => {

    await page.getByRole('button', {name: 'Sign in'}).first().click()
    await page.getByRole('textbox', {name: "Email"}).first().fill('test@test.com')

    await page.getByLabel('Email').first().fill('test@test.com')

    await page.getByPlaceholder('Jane Doe').fill('Artem-Bondar')

    await page.getByText('Submit').first().click()

    await page.getByTestId('inputEmail1').fill('test@test.com')

    await page.getByTitle('IoT Dashboard').click()

})
