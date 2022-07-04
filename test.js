let input = document.getElementById("input");
let button = document.getElementById("add-btn");
let box1Ul = document.getElementById('ul');
let box2Ul = document.querySelector("#box2-ul");
button.addEventListener('click', function () {
    if (input.value == "") {
        alert("Please enter some text")
    } else {
        alert("are u really Want for add task");
        let box1Li = document.createElement("li");
        content = document.createTextNode(input.value);
        box1Li.append(content);
        box1Ul.append(box1Li);

        const clear = document.createElement('button');
        clear.append(document.createTextNode("Clear"));
        box1Li.append(clear);
        clear.addEventListener('click', function () {
            box1Ul.remove();
            box2Ul.remove();
            box3Ul.remove();
        });

        let taskAdd = document.createElement("button");
        taskAdd.append(document.createTextNode("addTask"));
        box1Li.append(taskAdd);
        taskAdd.addEventListener('click', function () {

            box2Ul.append(box1Li);
            taskAdd.style.display = 'none';
        });
        
        
        input.value = "";
        let doneButton = document.getElementById("done-button");
        let box3Ul = document.getElementById('box3-ul')
        doneButton.addEventListener('click', function () {

            let list3 = document.createElement("li");
            list3.append(box1Li);
            box3Ul.append(list3);

        });
    }

});
