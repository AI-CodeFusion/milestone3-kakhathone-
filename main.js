var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var phoneno = document.getElementById('phone no').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var Experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b> ".concat(name, "</p>\n    <p><b>Phone no:</b> ").concat(phoneno, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n\n    <h3>Education</h3>\n     <p> ").concat(education, "</p>\n\n      <h3>Experience</h3>\n     <p> ").concat(Experience, "</p>\n\n\n      <h3>Skills</h3>\n     <p> ").concat(skills, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('the resume display element is missing.');
    }
});
