import { test } from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Locating child elements', async({page}) => {
    await page.locator('nb-card').locator('nb-radio-group').locator(':text-is("Option 1")').click();
    await page.locator('nb-card nb-radio-group :text-is("Option 2")').click();

    await page.locator('nb-card').getByRole('button', {name: 'Sign in'}).first().click()

    await page.locator('nb-card').nth(3).getByRole('button').click()
})

test('Locating parent elements', async({page}) => {
    await page.locator('nb-card', {hasText: 'Using the Grid'}).getByRole('button').click();
    await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('button').click();

    await page.locator('nb-card').filter({hasText: 'Using the Grid'}).getByRole('button').click()

    await page.locator('nb-card')
        .filter({has: page.locator('nb-checkbox')})
        .filter({hasText: 'Sign in'})
        .getByLabel('Email')
        .fill('test@test.com')

    await page.getByText('Using the Grid').locator('..').getByRole('button').click()
})