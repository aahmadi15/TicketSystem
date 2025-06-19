const errorMessages = document.getElementById('errorMessage');

const click = document.getElementById('btn-click');

var email = document.getElementById('email');

var name = document.getElementById('fullName');

var user = document.getElementById('gituser');

var ticket = document.querySelector('.ticket-generated .ticket');
var details = document.querySelector('.details');
const headerText = document.createElement("h1");

var inputField = document.querySelector('#fields');

let queudImages = [];
savedForm = document.querySelector('#saved');
savedDiv = document.querySelector('.saved');
queued = document.querySelector('.upload-icon');
input = document.querySelector('#upload');


console.log(input);

input.addEventListener("drop", (e) =>{
    e.preventDefault()
    const files = e.dataTransfer.files
    console.log(files);
    for (let i = 0; i<files.length; i++)
    {
        if (!files[i].type.match("image")) continue;

        if (queued.every(image => image.name !== files[i].name))
        {
            queudImages.push(file[i])
        }
        displayQueuedImages()
    }
});

input.addEventListener("change", ()=> {
    const files = input.files;

    for (let i = 0; i < files.length; i++)
    {
        queudImages.push(files[i]);
    }

    displayQueuedImages();
});


function displayQueuedImages(){
    let images = "";
   queudImages.forEach((image, index) => {
        images+= `${URL.createObjectURL(image)}`
    })

    console.log(images)
    queued.src = images;
}



function deleteQueuedImage(index){
    queudImages.splice(index, 1)
    displayQueuedImages()
}

/*myForm.addEventListener('submit', (event) => {
    event.preventDefault(); 
    errorMessages.innerHTML = '';
    const requiredFields = myForm.querySelectorAll('[required]');

    requiredFields.forEach((field) => {
        if (field.value.trim() === '')
        {
            const fieldName = field.getAttribute('fullName');
            const errorMessage = document.createElement('p');
            errorMessage.textContent = `${fieldName} is required`;
            errorMessages.appendChild(errorMessage);
        }
    });
});*/

function validateForm(){
    var valid = true;

    if (!validateField(this, 'name'))
        valid = false;

    if (!validateField(this, 'email'))
        valid = false;

    if (!validateField(this, 'gituser'))
        valid = false;
    if (email != "" && user!= "" && name!= "")
    {
        return valid && transition(); 
    }
}

function validateField(context, fieldName){
    var field = document.forms['attachForm'][fieldName],
    msg = 'Please enter your ' + fieldName, 
    errorField = document.getElementById(fieldName + '_error');
    console.log(context);

    if (context instanceof HTMLFormElement || context.id === fieldName)
    {
        errorField.innerHTML = (field.value === '') ? msg : '';
        event.preventDefault();
        return field.value !== '';
    }
}

function transition(){
        let shift = document.getElementById("fields");
        let fname = document.getElementById("fullName");
        inputField.style.display = "none";
        /*inputField.style.display = "hidden";
        inputField.style.overflow = "none";
        inputField.style.height = "0";
        inputField.style.width = "0";*/
        ticket.style.visibility = "visible";
        ticket.style.overflow = "visible";
        headerText.innerHTML += '' + fname.value + '';
        document.querySelector(".details").appendChild(headerText);
        
        /*
        ln.classList.remove("fullName");
        ln.classList.remove("gituser");*/
        //shift.toggle("hide");
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('email').addEventListener('input', validateForm);
    document.getElementById('fullName').addEventListener('input', validateForm);
    document.getElementById('gituser').addEventListener('input', validateForm);

    document.getElementById('attachForm').addEventListener('submit', validateForm);
});