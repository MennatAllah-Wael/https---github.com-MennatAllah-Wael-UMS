document.addEventListener("DOMContentLoaded", function ()
{

    const StudentshowGridSpan = document.getElementById("Student services");
    const StudentgridContainer = document.getElementById("Student services grid-container");
  
    const graduateshowGridSpan = document.getElementById("Graduate services");
    const graduategridContainer = document.getElementById("Graduate services grid-container");
  
    const newsshowGridSpan = document.getElementById("News");
    const newsgridContainer = document.getElementById("News grid-container");
  
    const loginForm = document.getElementById("loginForm");
    const loginFormContent = document.getElementById("loginFormContent");

    graduategridContainer.style.display = "none";
    StudentgridContainer.style.display = "grid";
    newsgridContainer.style.display = "none";


    loginFormContent.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
  
        // Check if the username and password are correct
        const usernameInput = document.getElementById("username").value;
        const passwordInput = document.getElementById("password").value;
  
        if (usernameInput === "1111" && passwordInput === "1111") {
          alert("Login successful!");
        } 
        else 
        {
          alert("Invalid username or password");
        }
      });

    // Add a click event listener to the span element
    StudentshowGridSpan.addEventListener("click", function () 
    {
        StudentgridContainer.style.display = "grid";
        graduategridContainer.style.display = "none";
        newsgridContainer.style.display = "none";
    });

    graduateshowGridSpan.addEventListener("click", function()
    {
        graduategridContainer.style.display = "grid";
        StudentgridContainer.style.display = "none";
        newsgridContainer.style.display = "none";   
    });

    newsshowGridSpan.addEventListener("click", function()
    {
        graduategridContainer.style.display = "none";
        StudentgridContainer.style.display = "none";
        newsgridContainer.style.display = "grid";
    });
  });

  