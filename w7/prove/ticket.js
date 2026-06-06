const form = document.querySelector("#form");

function ifStudent(type){
    const inumContainer = document.querySelector('#inumContainer')
    if (type == 'student'){
        inumContainer.hidden = false;
    }else
    {
        inumContainer.hidden = true;
    }
}


form.addEventListener("submit", e =>{
    e.preventDefault();
    const message = document.querySelector("#message");
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    console.log(firstName+lastName)
    const email = form.email.value;
    const type = form.ticketType.value;
    const date = form.date.value;
    const id = form.inumber.value;
    const accode = form.accode.value;
    const inumContainer = document.querySelector('#inumContainer')
    const accContainer = document.querySelector('#access');


    if (type =='student' && id.length != 9){
        inumContainer.hidden = false;
        message.textContent = 'Student I# must be 9 digits';
    }else if (type =='guest' && accode != 'EVENT131'){
        accContainer.hidden = false;
        message.textContent = 'Please enter the valid event code';
    }
    else{
        message.style.whiteSpace = "pre-line";
        message.innerHTML = `<h3>Ticket Created</h3>
        <p>${firstName} ${lastName}\n${type}\n${date}</P>`;
    }

})