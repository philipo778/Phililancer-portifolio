const status = document.getElementById('status');

const statuses = ['Phililancer', 'Software Engineer', 'Graphics Designer', 'Content Creator', 'CEO, Phililancer Tech Lab'];
let statusIndex = 0;

function animateStatuses() {
    const text = statuses[statusIndex]

    status.textContent = ''
    for(let i =0; i < text.length; i++) {
        setTimeout(()=> {
            status.textContent += text[i]
        }, i * 150)
    }

    statusIndex = statusIndex + 1;

    if(statusIndex >=statuses.length) {
        statusIndex = 0;
    }

}

animateStatuses();

setInterval(animateStatuses, 5000)

