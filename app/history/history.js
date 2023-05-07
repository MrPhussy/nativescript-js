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