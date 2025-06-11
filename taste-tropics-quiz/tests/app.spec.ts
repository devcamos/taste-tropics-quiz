import { test, expect } from '@playwright/test';

test('application loads successfully', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1000);
  await expect(page).toHaveTitle('React App');
});

test('quiz interface is visible', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1000);
  // Wait for the root element to be visible
  await expect(page.locator('#root')).toBeVisible();
  
  // Check if the main content is loaded
  await expect(page.locator('body')).toBeVisible();
  
  // Add a small delay to ensure the app is fully loaded
  await page.waitForTimeout(1000);
});

test('quiz navigation works', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1000);
  
  // Wait for the app to load
  await page.waitForLoadState('networkidle');
  
  // Check if we can interact with the page
  await expect(page.locator('body')).toBeVisible();
  
  // Simulate clicking a quiz option (adjust the selector as needed)
  await page.click('text=Option 1');
  await page.waitForTimeout(1000);
  
  // Verify the next question or result is displayed
  await expect(page.locator('text=Next Question')).toBeVisible();
  
  // Add a small delay to ensure the app is fully loaded
  await page.waitForTimeout(1000);
});

test('quiz state management', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(1000);
  
  // Wait for the app to load
  await page.waitForLoadState('networkidle');
  
  // Verify the page is interactive
  await expect(page.locator('body')).toBeVisible();
  
  // Simulate selecting an answer
  await page.click('text=Option 2');
  await page.waitForTimeout(1000);
  
  // Verify the state updates (e.g., a result or next question appears)
  await expect(page.locator('text=Result')).toBeVisible();
  
  // Add a small delay to ensure the app is fully loaded
  await page.waitForTimeout(1000);
}); 