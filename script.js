function logout(element) {
    if(element.innerText == "Log In") {
        element.innerText = "Logout"
    }
    else {
        element.innerText = "Log In"
    }
}


function addDefi(element) {
    element.remove();
}


function like(element) {
    console.log('Ninja was liked');
    alert('Ninja was liked')
}

console.log('Start');

function delayedMessage() {
    setTimeout(like, 2000);
}

console.log('End')
