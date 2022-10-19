
// array
let arr = [];

//function that compares two numbers in array
function compare(a ,b) {
    return a - b
}

//function that randomizes a number then puts it into array named arr
function array(arr){

    // while loop that loops 10
    while(arr.length < 10){

        //slumpar ett tal mellan 1-100
        let rand = Math.floor(Math.random() * 101);
        
        //if randomized number is in the array already it will re randomize
        if(arr.includes(rand)){
            continue;
        }else{
            arr.push(rand);
        }
    }


    // prints unsorted array and sorted array in two h1's then clears when you repress
    document.getElementById('h11').textContent = arr;
    console.log(arr);
    arr.sort(compare);  
    console.log(arr);
    document.getElementById('h12').textContent = arr;





}


//function to register user
function register(){

    //get input value
    let name = document.getElementById('name').value;
    let pass = document.getElementById('pass').value;
    let vpass = document.getElementById('vpass').value;
    let email = document.getElementById('email').value;

    //a checker if everything is filled in
    let passer = false;

    //if the name is lower than 6 characters or higher than 10 it will retur error
    if(name.length < 6){
        alert("name has to have 6 characters");
        passer = false;
    }else if(name.length > 10){
        alert("name can't have over 10 characters")
        passer = false;
    }else{
        passer = true;
    }

    //if the password and the verify password don't match it will return a error
    if(pass === vpass){
        passer = true;
    }else{
        alert("password does not match")
        passer = false;
    }

    //if the email starts or ends with a @ it will return a error 
    let res = email.includes('@');
    if(res == false || (email[0] == '@' || email[-1] == '@')){
        alert("not valid email");
        passer = false;
    }else{
        passer = true;
    }

    //checks if the checkbox is chekced
    if(document.getElementById('check').checked){
        passer = true;
    }else{
        alert("did not check");
        passer = false;
    }
    
    //if it is true it will register you otherwise it won't
    if(passer === true){
    document.location.href = '/loggedin.html'

    }else{
    alert("you have to fill everything out");
    }


    
}

function reg2(){
    document.location.href = "./loggedin.html"
}

document.getElementById("main").addEventListener('click',() => document.location.href = "./home.html");


//svenska e svårt

