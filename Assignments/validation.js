$().ready(function () {
    $("#signup").validate({
        rules: {
            firstname: {
                required: true,
                minlength: 3,
            },
            lastname: {
                required: true,
                minlength: 3,
            },
            phone: {

                required: true,
                digits: true,
                minlength: 10,


            },
            email: {
                required: true,
                email: true,
            },
            password: {
                required: true,
                minlength: 8,
            },
            confirmPassword: {
                required: true,
                equalTo: "#password"

            }
        },

        messages: {
            firstname: {
                required: "Please enter your firstname",
                minlength: "It should be atleast 3 characters long",
            },
            lastname: {
                required: "Please enter your Lastname",
                minlength: "It should be atleast 3 characters long",
            },
            phone: {

                required: "Please enter Valid phone number",
                digits: "only digts are allowed",
                minlength: "It should be atleast 10 characters long",


            },
            email: {
                required: "Please enter your email",

            },
            password: {
                required: "Please provide  password",

            },
            confirmPassword: {
                required: "Please re-enter your password",
                equalTo: "Please enter the same password as above",

            }
        },


        submitHandler: function (form) {
            alert("Form submitted");
            form.submit();
        }



    });


});
