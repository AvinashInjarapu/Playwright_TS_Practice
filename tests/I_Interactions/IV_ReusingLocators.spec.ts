import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=> {
    await page.goto('https://playground.bondaracademy.com/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
});

test('Reusing locators', async({page})=> {
/*
    page.locator('nb-card', {hasText: 'Basic form'}).getByLabel('Email').fill('test@test.com');
    page.locator('nb-card', {hasText: 'Basic form'}).getByLabel('Password').fill('password');
    page.locator('nb-card', {hasText: 'Basic form'}).locator('nb-checkbox').click();
    page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button').click(); */

    const basicForm = page.locator('nb-card', {hasText: 'Basic form'});
    const emailInput = basicForm.getByLabel('Email');

    await emailInput.fill('test@test.com');
    await basicForm.getByLabel('Password').fill('password');
    await basicForm.locator('nb-checkbox').click();
    await basicForm.getByRole('button').click();

    //Assertion
    await expect(emailInput).toHaveValue('test@test.com')
})

