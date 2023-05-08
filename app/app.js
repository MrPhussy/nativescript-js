import { Navigation } from '@nativescript/core';

// Bottom navigation
var bottomNav = new Navigation();
// Add items with icons and pages

// Navigate to first page
var navigationEntry = {
  moduleName: 'dashboard/dashboard',
};
new Navigation().navigate(navigationEntry);

frame.addChild(bottomNav);
