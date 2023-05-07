exports.onPageLoaded = function() {
  var lessons = [
    {
      topic: "Fractions",
      plan: "Introduce fractions...Explain numerator and denominator...Show examples..."
    },
    {
      topic: "Photosynthesis",
      plan: "Explain how plants make their own food...The ingredients plants need..."
    }
  ];
  
  var historyList = new ListView({
    items: lessons
  });
}

exports.onNavigatingTo = function(args) {
  var page = args.object; // Reference to the page
  bottomNav.selectedIndex = 0;  // Select this as active tab
};