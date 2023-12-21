
function nav(){
    var sdnav=document.getElementById('sidenav')
    sdnav.style.right=0;
}
function cls(){
    // alert('close')
    var sdnav=document.getElementById('sidenav')
    sdnav.style.right="-60%";
}
function search(){
    
    var input=document.getElementById('iput').value
    var upinput=input.toLowerCase()
    var dtail=document.getElementById('imbar')
    
    var sltr=dtail.querySelectorAll('div ')
   
    
    
    for (let i of sltr){
        if(i.textContent.toLocaleLowerCase().includes(upinput)){
            // console.log(i.textContent);
            i.style.display='block'
        }
        else{
            i.style.display='none'
        }
    }
}
