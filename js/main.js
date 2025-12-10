// run this code only after whole page loads
document.addEventListener('DOMContentLoaded', function () {
    "use strict"; // enables strict mode

// check if cta button exists

    // find element with class "cta"
    var cta = document.querySelector('.cta');

    // if the cta button exists
    if (cta) {
        // add a click listener
        cta.addEventListener('click', function () {
        });
    }

    //show or hide history details
    // find the button with id="toggleDetails"
    var toggle = document.getElementById('toggleDetails');

    // only run if the button actually exists
    if (toggle) {
        // when the button is clicked:
        toggle.addEventListener('click', function () {

            // find the details section
            var details = document.getElementById('details');

            // if details section does not exist stop
            if (!details) {
                return;
            }

            // if details are visible
            if (details.style.display === 'block') {

                // hide them
                details.style.display = 'none';

                // update button text
                this.textContent = 'Show More';

            } else {
                // else show them
                details.style.display = 'block';

                // update button text
                this.textContent = 'Hide';
            }
        });
    }
});
