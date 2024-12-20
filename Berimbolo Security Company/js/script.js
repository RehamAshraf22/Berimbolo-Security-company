document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your purchase!');
    });
});


// visitor
let visitorCount = localStorage.getItem('visitorCount') || 0;
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);
document.addEventListener('DOMContentLoaded', function() {
   console.log(`Visitor Count: ${visitorCount}`);
});

//back to top
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '⇪';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '30px';
backToTopButton.style.right = '30px';
backToTopButton.style.backgroundColor = '#e4b95b';
backToTopButton.style.color = '#383848';
backToTopButton.style.border = 'none';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.padding = '15px 20px';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.display = 'none'; 
document.body.appendChild(backToTopButton);
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

backToTopButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    let errors = "";

    if (name === "") {
        errors += "Please enter your name.\n";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        errors += "Please enter your email.\n";
    } else if (!emailRegex.test(email)) {
        errors += "Please enter a valid email address.\n";
    }

    if (subject === "") {
        errors += "Please enter a subject.\n";
    }

    if (errors !== "") {
        alert(errors);
    } else {
        alert("Form submitted successfully!");
        event.target.submit(); 
    }
});
