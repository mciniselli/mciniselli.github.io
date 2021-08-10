var description = tasks["description"];

var num_tasks = description.length;
var curr_task = -1

var masked_code=tasks["masked_code"];


function create_definition(text){
    lines=text.split("&&&")
    lines[0]="<h3>"+lines[0]+"</h3>"
    new_text=lines.join("")
    lines=new_text.split("|||")

    result=lines.join("</br>");
    return result;


}

function create_masked_code(code){
    lines=code.split("|||")
    result=lines.join("\n");
    return result;


}

function create_validation(code){
    lines=code.split("|||")
    for (let i=0; i<lines.length; i++){
        lines[i]=lines[i].replaceAll("&&&", "</br>")
    }
    return lines;


}

function load_task() {

    document.getElementById("description").innerHTML = create_definition(description[window.curr_task]);
    document.getElementById("title").innerHTML = "Task "+(curr_task+1).toString();
    result=create_masked_code(masked_code[window.curr_task])
    document.getElementById("snippet1").innerHTML = result;
    document.getElementById("IDE").innerHTML = create_masked_code(tasks["IDE"][window.curr_task])
    document.getElementById("T5").innerHTML = create_masked_code(tasks["T5"][window.curr_task])
    document.getElementById("retrieval").innerHTML = create_masked_code(tasks["retrieval"][window.curr_task])
    document.getElementById("N2C").innerHTML = create_masked_code(tasks["N2C"][window.curr_task])

    validation=create_validation(tasks["validation"][window.curr_task])

    document.getElementById("correct").innerHTML="<pre>"+validation[0]+"</pre>"
    document.getElementById("wrong1").innerHTML="<pre>"+validation[1]+"</pre>"
    document.getElementById("wrong2").innerHTML="<pre>"+validation[2]+"</pre>"

    hljs.highlightAll();

    code = document.getElementById("snippet1");
    text = code.innerHTML;
    text = text.replace("&lt;TO COMPLETE&gt;", "<span class=\"bold-red\">&lt;TO COMPLETE&gt; </span>")
    code.innerHTML = text;

}

function increase_task() {
    curr_task = window.curr_task + 1;
    if (curr_task == num_tasks) {
    curr_task = 0
    }
    window.curr_task = curr_task

}

function decrease_task() {
    curr_task = window.curr_task - 1;
    if (curr_task == -1) {
    curr_task = num_tasks - 1
    }
    window.curr_task = curr_task

}

function previous_task() {
    decrease_task()
    load_task()
}

function next_task() {
    increase_task()
    load_task()
}
window.onload = function () {

    document.getElementById("previous_button").onclick = function fun() {
    previous_task();
    }

    document.getElementById("next_button").onclick = function fun() {
    next_task();
    }
    next_task()
}