/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



function getall() {
    var url = "https://matheradical.dk/rest-jpa-devops-starter/api/movie/all";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                window.localStorage.setItem("thing", data);
                document.getElementById("pasteBox").innerHTML = JSON.stringify(data);
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            })
}

function getcount() {
    var url = "https://matheradical.dk/rest-jpa-devops-starter/api/movie/count";
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                window.localStorage.setItem("thing", data);
                document.getElementById("pasteBox").innerHTML = "<h1>Der er i alt"+data.count +" i denne film database </h1>";
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            })
}


function getid() {
    var url = "https://matheradical.dk/rest-jpa-devops-starter/api/movie/"+document.getElementById("id").value;
    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                window.localStorage.setItem("thing", data);
                document.getElementById("pasteBox").innerHTML = "<h1>Der er filmen"+data.name +" i denne film er der"+ data.actors.join(",")+ "  </h1>";
                /* data now contains the response, converted to JavaScript
                 Observe the output from the log-output above
                 Now, just build your DOM changes using the data*/
            })
}

