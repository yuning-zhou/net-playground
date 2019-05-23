function myFetch() {
    document.getElementById('btn').addEventListener('click', getText);
    document.getElementById('btn1').addEventListener('click', getLocalJSON);
    document.getElementById('btn2').addEventListener('click', getLocalJSONs);
    document.getElementById('btn3').addEventListener('click', getExternalAPI);
}

function getText() {
    // create xhr object
    const xhr = new XMLHttpRequest();

    // open method: method, url/file, async(t/f)
    xhr.open('GET', './sample.txt', true);
    xhr.onload = function() {
       if (this.status <= 300){
           console.log(this.responseText);
       } else {
           console.log('error!');
       }
    };
    xhr.onerror = function() {
        console.log('errorrrr');
    }
    // sends request
    xhr.send();
}

function getLocalJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './user.json', true);
    xhr.onload = function() {
        document.getElementById('user').innerHTML = this.responseText
    }
    xhr.send();
}

function getLocalJSONs() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './users.json', true);
    xhr.onload = function() {
        document.getElementById('users').innerHTML = this.responseText
    }
    xhr.send();
}

function getExternalAPI() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users?since=135', true);
    xhr.onload = function() {
        let output = '';
        const users = JSON.parse(this.responseText);
        for (let i in users){
            output += '<ul>' + '<li>' + users[i].login + '</li>' + '</ul>';
        }
        document.getElementById('github').innerHTML = output;
    };
    xhr.send();
}

function main(){
    myFetch();
}


document.addEventListener("DOMContentLoaded", main);