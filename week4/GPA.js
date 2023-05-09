function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades

    const grades = document.querySelector(inputSelector);
    const gradesArray = grades.split(",")
    const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
    console.log(cleanGrades);
    return cleanGrades




  }
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
    let points = 0 
    switch(grade) {
        case 'A': 
            points = 4;
            break;
        case 'B':
            points = 3;
            break 
        case 'C':
            points = 2;
            break
        default:
            points = -1;
        }
    return points;
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA

    const gpaPoints = grades.map(lookupGrade);
    const total = gpaPoints.reduce((total, item) => total + item, 0)
    return total/gpaPoints.length;
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa

    const grades = getGrades("#grades"); 
    console.log(grades);
    const gpa = calculateGpa(grades);
  }
  document.querySelector("#submitButton").addEventListener("click", clickHandler);