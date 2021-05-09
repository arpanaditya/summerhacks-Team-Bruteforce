/* 
    Summer Hacks
    SOA Code Room
    Project Template
    Use this template: https://github.com/SOACodeRoom/summerhacks-projectName/generate
    script.js: You will write your Javascript code for your portfolio website here. You can add other Javascript files too but it must be under "js" folder.

    Team-Bruteforce
    Team Members:-
    Aditya Arpan Sahoo
    Pavitra Behara
*/

/*Js is only for the welcome message*/
let message = document.getElementById('message_wel');
let str = message.innerHTML;
let index = str.length;
let count=1;

    
    setTimeout(() => {
        setInterval(() => {
            if(index > 1){
                cut();
            }
        }, 70);
        setInterval(() => {
            if(index<=1 && count<=str.length){
                undo();
            }
            
        }, 70);
    }, 1000);

    
    function cut(){
        let message = document.getElementById('message_wel');
        let str = message.innerHTML;
    message.innerHTML = str.substring(0,index);
    console.log(str.substring(0,index))
    return index--; 
}
function undo(){
    let message = document.getElementById('message_wel');
    let wel = 'Welcome to my portfolio !!!';
    // console.log(wel)
    message.innerHTML = wel.substring(0,count);
    console.log(wel.substring(0,count));
    return count++
}

