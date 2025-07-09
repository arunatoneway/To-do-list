
let create = document.getElementById("button-addon2")
let taskField = document.getElementById("taskField")



create.addEventListener('click', () => {

    let tasktext = taskField.value;

    if (!tasktext) {
        taskField.placeholder = "Enter a task for creation";

    } else {


        document.getElementById("disfil").innerHTML = tasktext;
        document.getElementById("disfil").style.backgroundColor = "red";

        let task = document.createElement("div")
        task.style.display = 'flex';


        let check = document.createElement("button")
        check.appendChild(document.createTextNode("done"))


        let discrip = document.createElement("p")
        discrip.style.color = 'white';
        discrip.appendChild(document.createTextNode(tasktext))


        let delebtn = document.createElement("button")
        delebtn.appendChild(document.createTextNode("Delete"))
        document.body.appendChild(task)
        task.appendChild(check)
        task.appendChild(discrip)
        task.appendChild(delebtn)




    }



})


