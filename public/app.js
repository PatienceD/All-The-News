// $("#scrape-btn").con("click", function(){
// displayArticles();

// });

// function displayArticles(data){


// }


$(document).on("click", "#submit-btn", function () {
    console.log("I've been clicked");
    let modalComment = $("#modal-article-comment").val().trim();
    console.log(modalComment);

    document.getElementById("#comment-display").innerHTML = modalComment;
});