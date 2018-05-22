window.onload = function() {
    document.getElementById('btn').addEventListener('click', getJokes);
    document.getElementById('btn2').addEventListener('click', getJokes2);
    document.getElementById('btn3').addEventListener('click', getJokesFetch);
}

function getJokes() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://api.icndb.com/jokes/random');
    xhr.onload = function() {
        if(this.readyState == 4) {
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
    }
    xhr.send();
};

let config = {
    "method": "",
    "url": ""
}

let getJokes2 = function getJokes2() {

    config.method = 'GET';
    config.url = 'http://api.icndb.com/jokes/random';

    promiseFunction(config)
        .then(function(response) {
            const jokes = JSON.parse(response);
            const html =
            `
            <ul class="list-unstyled">
                <li>${jokes.value.joke}</li>
            </ul>
            `;
            document.getElementById('getJokes2').innerHTML = "";
            document.getElementById('second').style.color = '';
            document.getElementById('getJokes2').innerHTML = html;
        })
        .catch(function(error) {
            console.log('Sorry, failed: ', error);
            document.getElementById('second').style.color = 'red';
        })
};

let promiseFunction = function promiseFunction(config) {
    let promise = new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(config.method, config.url);
        xhr.onload = function() {
            if (this.readyState == 4) {
                if(this.status === 200){
                    resolve(xhr.response);
                }
                else{
                    reject(Error(xhr.statusText));
                }
            }
        };
        xhr.onerror = function() {
            reject(Error('Network error'));
        }

        xhr.send();

    });

    return promise;

}

let getJokesFetch = function getJokesFetch() {

    config.url = 'http://api.icndb.com/jokes/random';

    fetch(config.url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            const html =
            `
            <ul class="list-unstyled">
                <li>${data.value.joke}</li>
            </ul>
            `;
            document.getElementById('getJokesFetch').innerHTML = "";
            document.getElementById('third').style.color = '';
            document.getElementById('getJokesFetch').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById('third').style.color = 'red';
        })
}