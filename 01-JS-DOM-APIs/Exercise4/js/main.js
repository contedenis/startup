window.onload = function()
{
    document.getElementById("btn").addEventListener("click", getJokes);
    document.getElementById("btn2").addEventListener("click", getJokes2);
    document.getElementById("btn3").addEventListener("click", getRepositories);
}

function getJokes(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random');
    xhr.onload = function(){
        if(this.status === 200){
            const jokes = JSON.parse(this.responseText);
            const html =
            `
            <ul class="list-unstyled">
                <li>${jokes.value.joke}</li>
            </ul>
            `;
            document.getElementById('getJokes').innerHTML = "";
            document.getElementById('getJokes').innerHTML = html;
        }
    }
    xhr.send();
};

let config = {
    "method": "",
    "url": "",
    "q": ""
}

let getJokes2 = function getJokes2(){

    config.method = 'GET';
    config.url = 'http://api.icndb.com/jokes/random';

    promiseFunction(config)
        .then(function(response){
            const jokes = JSON.parse(response);
            const html =
            `
            <ul class="list-unstyled">
                <li>${jokes.value.joke}</li>
            </ul>
            `;
            document.getElementById('getJokes2').innerHTML = "";
            document.getElementById("second").style.color = '';
            document.getElementById('getJokes2').innerHTML = html;
        })
        .catch(function(error){
            console.log("Sorry, failed: ", error);
            document.getElementById("second").style.color = 'red';
        })
};

let promiseFunction = function promiseFunction(config){
    let promise = new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url);
        xhr.onload = function(){
            if(this.status === 200){
                resolve(xhr.response);
            }
            else{
                reject(Error(xhr.statusText));
            }
        };
        xhr.onerror = function(){
            reject(Error("Network error"));
        }

        xhr.send();

    });
    return promise;
}

let getRepositories = function getRepositories(){
    config.method = 'GET';
    config.q = document.getElementById("search").value;
    config.url = 'https://api.github.com/search/repositories?q='+config.q;

    promiseFunction(config)
        .then(function(response){
            const searchResult = JSON.parse(response);
            let html = '';
            for(var post in searchResult.items){
                html += 
                    `
                        <ul>
                            <li class="list-unstyled">${searchResult.items[post].full_name}</li>
                        </ul>
                    `;
            }
            document.getElementById("btn3").style.color = '';
            document.getElementById('getSearch').innerHTML = html;
        })
        .catch(function(error){
            console.log("Sorry, failed: ", error);
            document.getElementById("btn3").style.color = 'red';
        })
};