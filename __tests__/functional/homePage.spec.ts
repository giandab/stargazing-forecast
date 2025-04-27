import { test, expect } from '@playwright/test';

test('has form with inputs', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    const heading = page.getByRole("heading")
    await expect(heading).toContainText("Stargazing Forecast");

    const locationInput = page.getByPlaceholder("Location")
    await expect(locationInput).toBeVisible();

    const dateInput = page.getByPlaceholder("date")
    await expect(dateInput).toBeVisible();

    const submitButtob = page.getByPlaceholder("submit")
    await expect(submitButtob).toBeVisible();
  });
  