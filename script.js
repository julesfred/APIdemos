$(document).ready(function() {
    $("button").on("click", function() { 
        var sub= $("#subreddit").val();
        $.get("https://www.reddit.com/r/" + sub + ".json").done(function(data) {
            console.log(data);
            
            var postArray = data.data.children;
            postArray.forEach(function(post) {
                console.log(post.data.author, post.data.title, post.data.url);
            $("body").append(`<div class="divStyle">
            <h2>"` + post.data.title + `"</h2>
            <p>` + post.data.author + `</p>
            <img src="` + post.data.url + `"/></div>`);
            });
            
            $("h2").addClass("titleStyle");
            $("p").addClass("paraStyle");
            $("img").addClass("imageStyle");
            
        }); 
    });
}); 

        // var cityName =$("#city").val();
        // var stateName=$("#state").val();
        // $.get("http://api.wunderground.com/api/85e67ae4c377762d/conditions/q/" + stateName + "/" + cityName + ".json").done(function(response){
        //     console.log(response);
        // });
