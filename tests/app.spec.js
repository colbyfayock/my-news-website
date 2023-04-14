const { test, expect } = require('@playwright/test');
import { Eyes, Target } from '@applitools/eyes-playwright';

test('it should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('The Hundred - Your antidote to information overload.');
});

test('it should load the homepage', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const eyes = new Eyes();
  await eyes.open(page, 'The Hundred', 'App');
  await eyes.check(Target.window().fully())
  await eyes.close();
});
