let timer; // Variable to store the interval

// Initialize the time values to 0
let minutes = 0;
let seconds = 0;
let centiseconds = 0;

function startStop() {
    if(!timer) {
        timer = setInterval(runStopwatch, 10);

        //replace the play icon with the pause icon
        const iconContainer = document.getElementById('startStopButton');
        const newIcon = document.createElement('i');
        newIcon.setAttribute("id", "icon");
        newIcon.classList.add('fa-solid', 'fa-pause', 'fa-2xl');
        newIcon.style.color = '#0284c7';
        const existingIcon = document.getElementById('icon');
        iconContainer.replaceChild(newIcon, existingIcon);
    } else {
        clearInterval(timer); // Stop the stopwatch
        timer = null;

        //replace the pause icon with the play icon
        const iconContainer = document.getElementById('startStopButton');
        const newIcon = document.createElement('i');
        newIcon.setAttribute("id", "icon");
        newIcon.classList.add('fa-solid', 'fa-play', 'fa-2xl');
        newIcon.style.color = '#0284c7';
        const existingIcon = document.getElementById('icon');
        iconContainer.replaceChild(newIcon, existingIcon);
    }
}

function runStopwatch() {
  // Stop the stopwatch when it gets to 60 minutes
    if(minutes >= 60) {
        clearInterval(timer);
        timer = null;
        minutes = 0;
        seconds = 0;
        centiseconds = 0;

        // replace the pause icon with the play icon
        const iconContainer = document.getElementById('startStopButton');
        const newIcon = document.createElement('i');
        newIcon.setAttribute("id", "icon");
        newIcon.classList.add('fa-solid', 'fa-play', 'fa-2xl');
        newIcon.style.color = '#0284c7';
        const existingIcon = document.getElementById('icon');
        iconContainer.replaceChild(newIcon, existingIcon);
        
        return;
    }
    
    centiseconds++;

    if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
    }

    // Add leading zeros if the numbers are less than 10
    let displayMinutes = (minutes < 10) ? '0' + minutes : minutes;
    let displaySeconds = (seconds < 10) ? '0' + seconds : seconds;
    let displayCentiseconds = (centiseconds < 10) ? '0' + centiseconds : centiseconds;

    // Update the display
    document.getElementById('display').innerHTML = `${displayMinutes}:${displaySeconds}:${displayCentiseconds}`;
}

function reset() {
    clearInterval(timer);
    // reset the display and time values to zero
    timer = null;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    document.getElementById('display').innerHTML = '00:00.00';

    // replace the pause icon with the play icon
    const iconContainer = document.getElementById('startStopButton');
    const newIcon = document.createElement('i');
    newIcon.setAttribute("id", "icon");
    newIcon.classList.add('fa-solid', 'fa-play', 'fa-2xl');
    newIcon.style.color = '#0284c7';
    const existingIcon = document.getElementById('icon');
    iconContainer.replaceChild(newIcon, existingIcon);
}
