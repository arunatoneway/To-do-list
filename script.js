
let create = document.getElementById("button-addon2")
let taskField = document.getElementById("taskField")
let disfil = document.getElementById("disfil")
let altskbtn = document.getElementById("altskbtn")
let pendbtn = document.getElementById("pendbtn")
let comptskbtn = document.getElementById("comptskbtn")
let alltasks = document.getElementById("alltasks")
let pendingtasks = document.getElementById("pendingtasks")
let Completedtasks = document.getElementById("Completedtasks")
let taskcount = 0

altskbtn.addEventListener('click',()=>{

    altskbtn.classList.add ("active")
    pendbtn.classList.remove ("active")
    comptskbtn.classList.remove ("active")
    pendingtasks.style.display ="None"
    alltasks.style.display ="flex"
    alltasks.style.flexDirection ="column-reverse"
    Completedtasks.style.display ="None"

})

pendbtn.addEventListener('click',()=>{
    altskbtn.classList.remove ("active")
    pendbtn.classList.add ("active")
    comptskbtn.classList.remove ("active")
    pendingtasks.style.display ="flex"
    pendingtasks.style.flexDirection ="column-reverse"
    alltasks.style.display ="None"
    Completedtasks.style.display ="None"
})

comptskbtn.addEventListener('click',()=>{
    altskbtn.classList.remove ("active")
    pendbtn.classList.remove ("active")
    comptskbtn.classList.add ("active")
    pendingtasks.style.display ="None"
    alltasks.style.display ="None"
    Completedtasks.style.display ="flex"
    Completedtasks.style.flexDirection ="column-reverse"
})


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

        let taskP = document.createElement("div")
        taskP.style.display = 'flex';
        taskP.style.justifyContent ="center"
        taskP.style.alignContent ="center"
        taskP.style.textAlign ="center"


        let check = document.createElement("button")
        check.appendChild(document.createTextNode("done"))
        check.style.height = "60px"

        check.addEventListener('click', () => {

            delebtn.style.display ="None"
            check.style.display ="None"
            task.style.backgroundColor ="green"

            delebtnP.style.display ="None"
            checkP.style.display ="None"
            taskP.style.backgroundColor ="green"
            Completedtasks.appendChild(taskP)

        })

        let checkP = document.createElement("button")
        checkP.appendChild(document.createTextNode("done"))
        checkP.style.height = "60px"

        checkP.addEventListener('click', () => {

            delebtnP.style.display ="None"
            checkP.style.display ="None"
            taskP.style.backgroundColor ="green"
            Completedtasks.appendChild(taskP)

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

        let discripP = document.createElement("p")
        discripP.style.color = 'white';
        discripP.appendChild(document.createTextNode(tasktext))
        discripP.style.width ="50vw"
        discripP.style.border = "2px solid black"
        discripP.style.paddingInline ="30px"
        discripP.style.backgroundColor ="blue"
        discripP.style.height = "60px"
        discripP.style.alignContent ="center"


        let delebtn = document.createElement("button")
        delebtn.appendChild(document.createTextNode("Delete"))
        delebtn.style.height = "60px"

        delebtn.addEventListener('click', () => {

            task.style.display ="None"

            taskP.style.display ="None"

        })

        let delebtnP = document.createElement("button")
        delebtnP.appendChild(document.createTextNode("Delete"))
        delebtnP.style.height = "60px"

        delebtnP.addEventListener('click', () => {

            taskP.style.display ="None"

            task.style.display ="None"

        })




        alltasks.appendChild(task)
        task.appendChild(check)
        task.appendChild(discrip)
        task.appendChild(delebtn)

        pendingtasks.appendChild(taskP)
        taskP.appendChild(checkP)
        taskP.appendChild(discripP)
        taskP.appendChild(delebtnP)

        taskField.value = ""
        taskField.placeholder = "Enter your task here";




    }



})




