/*!
 * Create an array of word objects, each representing a word in the cloud
 */
var word_array = [
    {text: "Engineering", weight: 15},
    {text: "Product", weight: 9},
    {text: "Team North", weight: 6},
    {text: "Communication", weight: 7},
    {text: "Leadership", weight: 7},
    {text: "Speaking", weight: 4},
    {text: "Research", weight: 3},
    {text: "Planning", weight: 2},
    {text: "Jesse Garrison", weight: 7, link: "people/jessegarrison"},
    {text: "Management", weight: 11},
    {text: "Design", weight: 8},
    {text: "Forecast", weight: 7},
    {text: "Collaboration", weight: 2},
    {text: "FED", weight: 12, link: "teams/fed"},
    {text: "Mobile Team", weight: 7},
    {text: "Copywriting", weight: 10},
    {text: "Q&A", weight: 7},
    {text: "Operations", weight: 6},
    {text: "Delivery", weight: 5},
    {text: "Sales", weight: 3},
    {text: "Strategy", weight: 4},
    {text: "UX", weight: 12},
    {text: "Marketing", weight: 12}
    // ...as many words as you want
];

$(function() {
  // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
  $("#word-cloud").jQCloud(word_array);
});