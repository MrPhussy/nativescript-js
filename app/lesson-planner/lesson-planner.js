const chatGPT = require('chat-gpt-api');

exports.onPageLoaded = function () {
  var yearGroupDropdown = new DropDown();
  // Add options for year groups

  var subjectDropdown = new DropDown();
  // Add options for subjects

  var topicInput = new TextInput();

  var submitButton = new Button();
  submitButton.text = 'Submit';
  submitButton.on(Button.tap, () => {
    var yearGroup = yearGroupDropdown.selectedIndex;
    var subject = subjectDropdown.selectedIndex;
    var topic = topicInput.text;

    // Call ChatGPT API to get lesson plan
    chatGPT.getLessonPlan(yearGroup, subject, topic).then((response) => {
      var lessonPlan = new TextView();
      lessonPlan.text = response; // Add response from API
    });
  });
};

exports.onNavigatingTo = function (args) {
  var page = args.object; // Reference to the page
  bottomNav.selectedIndex = 0; // Select this as active tab
};
