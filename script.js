


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
        let completed=false;

    tasklist.push({id:id,name:name,date:date,desc:desc,completed:completed});
        displaytask();
        })


    function displaytask(){
        const tasklistcontainer=document.getElementById("task-list-txt");
        tasklistcontainer.innerHTML="";


        tasklist.forEach(function(task,index){
        const li= document.createElement("li");
        li.dataset.id=task.id;
        li.textContent = task.name + " | " + task.date + " | " + task.desc;
        tasklistcontainer.appendChild(li);

            if(task.id==selectedid){
                li.classList.add("selected");

            }
          
            
            if(task.completed){
             li.classList.add("completed");
            }
        
         li.addEventListener("click",function(){
            selectedid=this.dataset.id;
            console.log("selected:", selectedid);
            displaytask();
          })

           
        
    });

}

    const completebtn=document.getElementById("mark-completed");
        completebtn.addEventListener("click",function(){
        const task=tasklist.find(function(task){
            return task.id==selectedid;
        });
        if(task){
             task.completed=true;
             displaytask();
        }
});

      // Add a "Delete" button to each task item
            const deletebtn=document.getElementById("delete-task");
            deletebtn.addEventListener("click",function(){
                tasklist.forEach(function(task,index){
                    if(task.id==selectedid){
                        tasklist.splice(index,1);
                        displaytask();
                    }

                })
        })
    
