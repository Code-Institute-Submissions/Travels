function sendMail(contactForm) {
    emailjs.send("gmail", "sonia", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailadress.value,
        "project_reguest": contactForm.projectsummary.value
})
.then(
    function(response) {
        console.log("SUCCESS", response);
    },    
    function(error) {
        console.log("FAILED", error);

    });
}
