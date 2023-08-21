const xhr = new XMLHttpRequest();
let sub = document.getElementById("submit")



sub.onclick= function(){
    let user = document.getElementById("movie_search").value;
    console.log(user)
     
    xhr.open("GET","http://www.omdbapi.com/?t="+user+"&apikey=f8372063");
    xhr.send();
    xhr.onloadend = postAjaxFunction;
};

let r1 = document.getElementById("response1")
let r2 = document.getElementById("response2")
let r3 = document.getElementById("response3")
let r4 = document.getElementById("response4")

let postAjaxFunction = function () {
    if (xhr.status === 200) {
        let response = JSON.parse(xhr.responseText);
        console.log(response)
        response1.innerHTML="Movie Name :- "+ response. Title
        response2.innerHTML="Movie Year :- "+ response.Year
        response3.innerHTML="Movie Director :- "+ response.Director
        response4.innerHTML="Movie Rating :-"+ response.imdbRating
    } else {
        user.innerHTML = "Something went wrong.";
    }
};
