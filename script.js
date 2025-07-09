
let create = document.getElementById("button-addon2")
let taskField = document.getElementById("taskField")
let disfil = document.getElementById("disfil")
let taskcount = 0



create.addEventListener('click', () => {

    let tasktext = taskField.value;

    if (!tasktext) {
        taskField.placeholder = "Enter a task for creation";

    } else {


        disfil.innerHTML = tasktext;
        disfil.style.backgroundColor = "red";

        let task = document.createElement("div")
        task.style.display = 'flex';
        task.style.justifyContent ="center"
        task.style.alignContent ="center"
        task.style.textAlign ="center"


        let check = document.createElement("button")
        check.appendChild(document.createTextNode("done"))
        check.style.height = "60px"

        check.addEventListener('click', () => {

            delebtn.style.display ="None"
            check.style.display ="None"
            task.style.backgroundColor ="green"

        })


        let discrip = document.createElement("p")
        discrip.style.color = 'white';
        discrip.appendChild(document.createTextNode(tasktext))
        discrip.style.width ="50vw"
        discrip.style.border = "2px solid black"
        discrip.style.paddingInline ="30px"
        discrip.style.backgroundColor ="blue"
        discrip.style.height = "60px"
        discrip.style.alignContent ="center"


        let delebtn = document.createElement("button")
        delebtn.appendChild(document.createTextNode("Delete"))
        delebtn.style.height = "60px"

        delebtn.addEventListener('click', () => {

            task.style.display ="None"

        })




        document.body.appendChild(task)
        task.appendChild(check)
        task.appendChild(discrip)
        task.appendChild(delebtn)

        taskField.value = ""
        taskField.placeholder = "Enter your task here";




    }



})




