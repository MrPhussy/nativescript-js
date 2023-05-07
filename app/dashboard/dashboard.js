exports.onPageLoaded = function() {
  // Use ChartJS to show a bar chart
  new Chart(document.getElementById("chart"), {
    type: "bar", 
    data: {
      labels: ["January", "February", "March", "April", "May"],
      datasets: [
        {
          label: "Lessons Completed",
          backgroundColor: "#3e95cd",
          data: [3, 5, 2, 2, 4]
        }
      ]
    }
  });
  
  // Use ListView to show recent lessons 
  var recentLessons = new ListView({
    items: [
      { title: "Lesson 1", date: "Jan 1, 2020" },
      { title: "Lesson 2", date: "Jan 15, 2020" }
    ]
  });
}

exports.onNavigatingTo = function(args) {
  var page = args.object; // Reference to the page
  bottomNav.selectedIndex = 0;  // Select this as active tab
};