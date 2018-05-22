window.onload = function() {
    //document.getElementById('btn3').addEventListener('click', getRepositories);
    document.getElementById('btn3').addEventListener('click', getRepositoriesFetch);
}

let config = {
    "method": "",
    "url": "",
    "q": ""
}

let getRepositories = function getRepositories() {
    config.method = 'GET';
    config.q = document.getElementById("search").value;
    config.url = 'https://api.github.com/search/repositories?q='+config.q;

    promiseFunction(config)
        .then(function(response) {
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
            document.getElementById('columnResult').style.visibility = 'visible';
            document.getElementById('btn3').style.color = '';
            document.getElementById('getSearch').innerHTML = html;
        })
        .catch(function(error) {
            console.log('Sorry, failed: ', error);
            document.getElementById('btn3').style.color = 'red';
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

let getRepositoriesFetch = function getRepositoriesFetch() {

    config.q = document.getElementById("search").value;
    config.url = 'https://api.github.com/search/repositories?q='+config.q;

    fetch(config.url)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            let html = '';
            for(var post in data.items){
                html += 
                    `
                        <ul>
                            <li class="list-unstyled">${data.items[post].full_name}</li>
                        </ul>
                    `;
            }
            document.getElementById('columnResult').style.visibility = 'visible';
            document.getElementById('btn3').style.color = '';
            document.getElementById('getSearch').innerHTML = html;
        })
        .catch(function(error) {
            console.log(error);
            document.getElementById('third').style.color = 'red';
        })
}
    