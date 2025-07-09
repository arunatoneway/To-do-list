
let create = document.getElementById("button-addon2")


create.addEventListener('click', () => {

    let tasktext = document.getElementById("taskField").value;


    document.getElementById("disfil").innerHTML = tasktext;
    document.getElementById("disfil").style.backgroundColor = "red";

    let task = document.createElement("div")
    let check = document.createElement("button")
    check.appendChild(document.createTextNode("done"))
    let discrip = document.createElement("p")
    discrip.appendChild(document.createTextNode(tasktext))
    let delebtn = document.createElement("button")
    delebtn.appendChild(document.createTextNode("Delete"))
    document.body.appendChild(task)
    task.appendChild(check)
    task.appendChild(discrip)
    task.appendChild(delebtn)
    

    


    

})


