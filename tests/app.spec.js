const { test, expect } = require('@playwright/test');

test('it should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('The Hundred - Your antidote to information overload.');
});
