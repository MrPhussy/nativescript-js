import { Navigation } from '@nativescript/core';

// Bottom navigation
var bottomNav = new BottomNavigation();
bottomNav.addItem({
  /* Dashboard item */
});
bottomNav.addItem({
  /* Lesson Planner item */
});
bottomNav.addItem({
  /* History item */
});

// Navigate to first page
var navigationEntry = {
  moduleName: 'dashboard/dashboard',
};
new Navigation().navigate(navigationEntry);

exports.onNavigatingTo = function () {
  bottomNav.selectedIndex = 0; // Select Dashboard tab
};

frame.addChild(bottomNav);
