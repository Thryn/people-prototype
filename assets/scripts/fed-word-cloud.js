/*!
 * Create an array of word objects, each representing a word in the cloud
 */
var word_array = [
    {text: "UX Design", weight: 15},
    {text: "HTML5", weight: 9},
    {text: "CSS3", weight: 10},
    {text: "javascript", weight: 7},
    {text: "Leadership", weight: 5},
    {text: "jQuery", weight: 4},
    {text: "Research", weight: 3},
    {text: "Planning", weight: 2},
    {text: "SASS", weight: 13},
    {text: "Visual Design", weight: 11},
    {text: "Interaction Design", weight: 10},
    {text: "Usability", weight: 7},
    {text: "ERB", weight: 9},
    {text: "Ruby on Rails", weight: 3},
    {text: "Problem Solving", weight: 12},
    {text: "Mobile Design", weight: 10},
    {text: "Performance", weight: 7},
    {text: "Trivia", weight: 6},
    {text: "Puns", weight: 5},
    {text: "Icon Design", weight: 8},
    {text: "Animation", weight: 7},
    {text: "Writing", weight: 3},
    {text: "Google Image Searching", weight: 5}
    // ...as many words as you want
];

$(function() {
  // When DOM is ready, select the container element and call the jQCloud method, passing the array of words as the first argument.
  $("#fed-word-cloud").jQCloud(word_array);
});