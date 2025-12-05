// Ocean Conservation Form - Simple Enhanced Version
document.addEventListener("DOMContentLoaded", function() {
    
    let myForm = document.getElementById("supportForm");
    let messageBox = document.getElementById("formMessage");
    
    if(myForm) {
        myForm.addEventListener("submit", function(event) {
            event.preventDefault();
            
            // Get values
            let userName = document.getElementById("name").value.trim();
            let userEmail = document.getElementById("email").value.trim();
            let userRegion = document.getElementById("region").value;
            
            // Check required fields
            if(userName === "" || userEmail === "") {
                showMessage("Please fill in both name and email.", "text-danger");
                return;
            }
            
            // Email validation
            if(!userEmail.includes("@") || !userEmail.includes(".")) {
                showMessage("Please enter a valid email address.", "text-danger");
                return;
            }
            
            // Create personalized message
            let thankYouMessage = `Thank you ${userName}! `;
            thankYouMessage += `We'll send ocean conservation tips to ${userEmail}.`;
            
            if(userRegion !== "") {
                thankYouMessage += ` We'll include ${userRegion}-specific resources!`;
            }
            
            showMessage(thankYouMessage, "text-success");
            
            // Clear form
            myForm.reset();
        });
    }
    
    function showMessage(text, colorClass) {
        if(messageBox) {
            messageBox.innerHTML = text;
            messageBox.className = "mt-3 " + colorClass;
            
            setTimeout(function() {
                messageBox.innerHTML = "";
                messageBox.className = "mt-3";
            }, 5000);
        }
    }
    
    // Image click functionality (keep what you had)
    let oceanPics = document.querySelectorAll(".galleryImages img");
    for(let i = 0; i < oceanPics.length; i++) {
        oceanPics[i].addEventListener("click", function() {
            alert("You clicked on: " + this.alt + " - This marine ecosystem needs protection!");
        });
    }
    
    console.log("Ocean conservation form updated!");
});