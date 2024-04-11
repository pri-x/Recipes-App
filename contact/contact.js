"use strict";

$(document).ready( () => {

    // move focus to first text box
    $("#fname").focus();

    // the handler for the click event of the submit button
    $("#feedbackForm").submit( event => {
        let isValid = true;
        
        // validate fname
        const fname = $("#fname").val().trim();
        const namePattern = /^[a-zA-Z]+$/;
        if (fname == "") {
            $("#fname").next().text("This field is required.");
            isValid = false;
        }
        else if ( !namePattern.test(fname) ) {
            $("#fname").next().text("Must be a name.");
            isValid = false;
        }
        else {
            $("#fname").next().text("");
        }
        $("#fname").val(fname);

        // validate lname
        const lname = $("#lname").val().trim();
        if (lname == "") {
            $("#lname").next().text("This field is required.");
            isValid = false;
        }
        else if ( !namePattern.test(lname) ) {
            $("#lname").next().text("Must be a name.");
            isValid = false;
        }
        else {
            $("#lname").next().text("");
        }
        $("#lname").val(lname);

        // validate the email entry with a regular expression
        const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
        const email = $("#email").val().trim();
        if (email == "") {
            $("#email").next().text("This field is required.");
            isValid = false;
        }
        else if ( !emailPattern.test(email) ) {
            $("#email").next().text("Must be a valid email address.");
            isValid = false;
        }
        else {
            $("#email").next().text("");
        }
        $("#email").val(email);

        // validate the phone no with a regular expression
        const phoneNoPattern = /^\d{10}$/;
        const phoneNo = $("#phoneNo").val().trim();
        if (phoneNo == "") {
            $("#phoneNo").next().text("This field is required.");
            isValid = false;
        }
        else if ( !phoneNoPattern.test(phoneNo) ) {
            $("#phoneNo").next().text("Must be a valid phone no.");
            isValid = false;
        }
        else {
            $("#phoneNo").next().text("");
        }
        $("#phoneNo").val(phoneNo);

        // validate address
        const address = $("#address").val();
        if (address == "") {
            $("#address").next().text("This field is required.");
            isValid = false;
        }
        else {
            $("#address").next().text("");
        }
        $("#address").val(address);

        // validate feedback
        const feedback = $("#feedback").val();
        if (feedback == "") {
            $("#feedback").next().text("This field is required.");
            isValid = false;
        }
        else {
            $("#feedback").next().text("");
        }
        $("#feedback").val(feedback);

        // prevent the submission of the form if any entries
        // are invalid
        if (isValid == false) {
            event.preventDefault();
        }

    });

});

