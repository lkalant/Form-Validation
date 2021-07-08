window.onload = function () {

    var email = document.getElementById("email");
    var span1 = document.createElement("span");
    span1.style.display = "block";
    span1.style.height = "1.5em";
    span1.style.color = "#FFC108";
    email.parentNode.appendChild(span1);

    var pwd = document.getElementById("pwd");
    var span2 = document.createElement("span");
    span2.style.display = "block";
    span2.style.height = "1.5em";
    span2.style.color = "#FFC108";
    pwd.parentNode.appendChild(span2);

    var confirm = document.getElementById("confirm");
    var span3 = document.createElement("span");
    span3.style.display = "block";
    span3.style.height = "1.5em";
    span3.style.color = "#FFC108";
    confirm.parentNode.appendChild(span3);

    // remove margins from below input fields
    var formElements = document.querySelectorAll('.form-group');
    for (var i = 0; i < 3; i++) {
        formElements[i].style = "margin-bottom:0px";
    }

    let re = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    email.onfocus = function () {
        span1.innerText = "Please enter a valid email abc@def.xyz";
        span1.style.display = "block";
        email.classList = "form-control";
    }
    pwd.onfocus = function () {
        span2.innerText = "Password must be 6 or more characters";
        span2.style.display = "block";
        pwd.classList = "form-control";
    }
    confirm.onfocus = function () {
        span3.innerText = "Password must be 6 or more characters";
        span3.style.display = "block";
        confirm.classList = "form-control";
    }

    email.onblur = function () {
        span1.style.display = "hidden";
        span1.innerText = "";
    }
    pwd.onblur = function () {
        span2.style.display = "hidden";
        span2.innerText = "";

    }
    confirm.onblur = function () {
        span3.style.display = "hidden";
        span3.innerText = "";
    }

    var form = document.getElementById("myForm");

    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        // clear any errors by removeing error classes
        email.classList = "form-control";
        pwd.classList = "form-control";
        confirm.classList = "form-control";

        // test e-mail
        if (!re.test(email.value)) {
            email.classList = "form-control error";
            if (email.value == "" || email.value == null) {
                span1.innerText = "Please enter your email";
            } else {
                span1.innerText = "E-mail must be in the form of: abc@def.xyz";
            }
            span1.style.display = "block";
            e.preventDefault();
        }

        // test first password length
        if (pwd.value.length < 6) {
            pwd.classList = "form-control error";
            span2.innerText = "Password must be at least 6 characters";
            span2.style.display = "block";
            e.preventDefault();
        }

        // test confirmation password length
        if (confirm.value.length < 6) {
            confirm.classList = "form-control error";
            span3.innerText = "Password must be at least 6 characters";
            span3.style.display = "block";
            e.preventDefault();
        }

        // test password matching
        if (pwd.value != confirm.value) {
            pwd.classList = "form-control error";
            confirm.classList = "form-control error";
            span3.innerText = "The passwords do not match";
            span3.style.display = "block";
            e.preventDefault();
        }
    }
}

