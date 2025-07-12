
let create = document.getElementById("button-addon2")
let taskField = document.getElementById("taskField")
let disfil = document.getElementById("disfil")
let altskbtn = document.getElementById("altskbtn")
let pendbtn = document.getElementById("pendbtn")
let comptskbtn = document.getElementById("comptskbtn")
let alltasks = document.getElementById("alltasks")
let pendingtasks = document.getElementById("pendingtasks")
let Completedtasks = document.getElementById("Completedtasks")
let modelEditview = document.getElementById("modelEditview")
let editviewfield = document.getElementById("editviewfield")
let savechgbtn = document.getElementById("savechgbtn")
let taskcount = 0


altskbtn.addEventListener('click', () => {

    altskbtn.classList.add("active")
    pendbtn.classList.remove("active")
    comptskbtn.classList.remove("active")
    pendingtasks.style.display = "None"
    alltasks.style.display = "flex"
    alltasks.style.flexDirection = "column-reverse"
    Completedtasks.style.display = "None"

})

pendbtn.addEventListener('click', () => {
    altskbtn.classList.remove("active")
    pendbtn.classList.add("active")
    comptskbtn.classList.remove("active")
    pendingtasks.style.display = "flex"
    pendingtasks.style.flexDirection = "column-reverse"
    alltasks.style.display = "None"
    Completedtasks.style.display = "None"
})

comptskbtn.addEventListener('click', () => {
    altskbtn.classList.remove("active")
    pendbtn.classList.remove("active")
    comptskbtn.classList.add("active")
    pendingtasks.style.display = "None"
    alltasks.style.display = "None"
    Completedtasks.style.display = "flex"
    Completedtasks.style.flexDirection = "column-reverse"
})


create.addEventListener('click', () => {

    let tasktext = taskField.value;
    let a =""

    if (!tasktext) {
        taskField.placeholder = "Enter a task for creation";

    } else {


        disfil.innerHTML = tasktext;
        disfil.style.backgroundColor = "red";



        let task = document.createElement("div")
        task.style.display = 'flex';
        task.style.justifyContent = "center"
        task.style.alignItems = "center"
        task.style.padding = "10px"
        task.style.textAlign = "center"
        task.style.border = "2px solid black"
        task.style.borderRadius = "20px"
        task.style.margin = "10px"

        let taskP = document.createElement("div")
        taskP.style.display = 'flex';
        taskP.style.justifyContent = "center"
        taskP.style.alignItems = "center"
        taskP.style.padding = "10px"
        taskP.style.textAlign = "center"
        taskP.style.border = "2px solid black"
        taskP.style.borderRadius = "20px"
        taskP.style.margin = "10px"


        let check = document.createElement("i")
        let checkbx = document.createTextNode("check_box_outline_blank")
        check.appendChild(checkbx)
        check.classList.add("material-icons")
        check.style.fontSize = "45px"

        check.addEventListener('click', () => {

            delebtn.style.visibility = "hidden"
            check.removeChild(checkbx)
            check.appendChild(document.createTextNode("check_box"))
            task.style.backgroundColor = "green"

            delebtnP.style.visibility = "hidden"
            checkP.removeChild(checkbxP)
            checkP.appendChild(document.createTextNode("check_box"))
            taskP.style.backgroundColor = "green"
            Completedtasks.appendChild(taskP)

        })

        let checkP = document.createElement("i")
        let checkbxP = document.createTextNode("check_box_outline_blank")
        checkP.appendChild(checkbxP)
        checkP.classList.add("material-icons")
        checkP.style.fontSize = "45px"

        checkP.addEventListener('click', () => {

            delebtnP.style.visibility = "hidden"
            checkP.removeChild(checkbxP)
            checkP.appendChild(document.createTextNode("check_box"))
            taskP.style.backgroundColor = "green"
            Completedtasks.appendChild(taskP)

            delebtn.style.visibility = "hidden"
            check.removeChild(checkbx)
            check.appendChild(document.createTextNode("check_box"))
            task.style.backgroundColor = "green"

        })


        let discrip = document.createElement("p")
        discrip.style.color = 'black';
        discrip.innerText = tasktext
        discrip.style.width = "50vw"
        discrip.style.paddingInline = "30px"
        discrip.style.height = "60px"
        discrip.style.alignContent = "center"
        discrip.style.fontSize = "20px"
        discrip.type = "button"
        discrip.addEventListener('click', () => {

            let modaldisp = new bootstrap.Modal(document.getElementById("modelEditview"))
            modaldisp.show()
            editviewfield.value = discrip.innerText
            savechgbtn.addEventListener('click', () => {
                console.log(editviewfield.value)
            
                

        })
        discrip.innerText =editviewfield.value
        console.log(discrip.innerText)
        })
        



        let discripP = document.createElement("p")
        discripP.style.color = 'black';
        discripP.appendChild(document.createTextNode(tasktext))
        discripP.style.width = "50vw"
        discripP.style.paddingInline = "30px"
        discripP.style.height = "60px"
        discripP.style.alignContent = "center"
        discripP.style.fontSize = "20px"
        discripP.style.overflow = "auto"
        discripP.classList.add("btn")
        discripP.setAttribute("data-bs-toggle", "modal")
        discripP.setAttribute("data-bs-target", "#modelEditview")


        let delebtn = document.createElement("button")
        delebtn.appendChild(document.createTextNode("Delete"))
        delebtn.style.height = "60px"

        delebtn.addEventListener('click', () => {

            task.style.display = "None"

            taskP.style.display = "None"

        })

        let delebtnP = document.createElement("button")
        delebtnP.appendChild(document.createTextNode("Delete"))
        delebtnP.style.height = "60px"

        delebtnP.addEventListener('click', () => {

            taskP.style.display = "None"

            task.style.display = "None"

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




