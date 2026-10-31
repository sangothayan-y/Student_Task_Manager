


const taskname =document.getElementById("task");
const taskdate =document.getElementById("due-date");
const taskdesc =document.getElementById("description");
let selectedid = null;
const addtaskbtn =document.getElementById("add-task-btn");

    let tasklist=[];
    addtaskbtn.addEventListener("click",function(){
        let id=Date.now();
        let name=taskname.value;
        let date=taskdate.value;
        let desc=taskdesc.value;

    tasklist.push({id:id,name:name,date:date,desc:desc});
        displaytask();
        })


    function displaytask(){
        const tasklistcontainer=document.getElementById("task-list-txt");
        tasklistcontainer.innerHTML="";


        tasklist.forEach(function(task){
        const li= document.createElement("li");
        li.dataset.id=task.id;
        li.innerHTML=task.name +" "+task.date+" "+task.desc;
        tasklistcontainer.appendChild(li);
       
        li.addEventListener("click",function(){
            selectedid=this.dataset.id;

            const deletebtn=document.getElementById("delete-task");
            deletebtn.addEventListener("click",function(){
                tasklist.forEach(function(task,index){
                    if(task.id==selectedid){
                        tasklist.splice(index,1);
                    }
                })
        })
        });
    })
}

