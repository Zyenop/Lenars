$(document).ready(function(){

   var API_KEY = "AIzaSyDDBXvXZlraYJmPP4OKq8XLwZxYNynE-3I"

   var video = ""

   var videos = $("#videos")

   $("#form").submit(function(event) {
        event.preventDefault()
        alert('Form is submitted')

        var search = $("#search").val()

        videoSearch(API_KEY,search,12)

   })

   function videoSearch(key,search,maxResults){
        $.get("https://www.googleapis.com/youtube/v/search?key=" + key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function(data){
          console.log(data)

          data.items.forEach(items => {
               
          });
        })
   }

})