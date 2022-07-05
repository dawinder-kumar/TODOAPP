let input = document.getElementById("input");
let button = document.getElementById("add-btn");
let todoUl = document.getElementById('ul');
let inprogressUl = document.querySelector("#box2-ul");
let count = document.getElementById("count");
let i = 0;


button.addEventListener('click', function () {
    i+=1;
    count.innerHTML=i;
    if (input.value == "") {
        alert("Please enter some text");
    } else {

        let todoList = document.createElement("li");
        content = document.createTextNode(input.value);
        todoList.append(content);
        todoUl.append(todoList);
        todoList.style.background = 'white';
        todoList.style.borderRadius = '1rem';
    

        let taskAdd = document.createElement("button");
        taskAdd.append(document.createTextNode("addTask"));
        todoList.append(taskAdd);
        input.value = "";
        taskAdd.addEventListener('click', function () {
            let inprogressList = document.createElement("li");
            let taskDone = document.createElement("button");
            taskDone.append(document.createTextNode("taskDone"));
            inprogressList.append(todoList);
            inprogressUl.append(inprogressList);
            todoList.append(taskDone);
            taskAdd.style.display = 'none';


            taskDone.addEventListener('click', function () {
                completedUl.append(inprogressList);
                taskDone.style.display = 'none';
            });

             let doneButton = document.getElementById("done-button");
             let completedUl = document.getElementById('box3-ul');
            doneButton.addEventListener('click', function () {
                let completedList = document.createElement("li");
                completedList.append(inprogressUl);
                completedUl.append(completedList);

            });
        });
        let clear = document.createElement("button");
        clear.append(document.createTextNode("clear"));
        todoList.append(clear);
        clear.addEventListener('click', function () {
            alert("Are you really Want to Delete Task");
            todoList.remove();

        })
    }
});
