function myFetch() {
    document.getElementById('btn').addEventListener('click', getText);
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

function main(){
    myFetch();
}


document.addEventListener("DOMContentLoaded", main);