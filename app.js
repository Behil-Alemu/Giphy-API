// console.log("Let's get this party started!");
// async function getGiphy(key){
//     try{
//     const url = (`http://api.giphy.com/v1/gifs/search?q=${key}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
//     const res = await axios.get(url)
//     console.log(res)
//     const img = document.querySelector('#unnyImg');
//     img.src = res.data.data.url;
//     }catch(e){
//         alert("NOT FOUND!");
//     }
// const btn = document.querySelector('#button');
// btn.addEventListener("submit", function (e) {
//   const input = document.querySelector('#search');
//   e.preventDefault();
//   getGiphy(input.value);
//   input.value = '';
// })
// }






// getGiphy('simpson');
// $('img').on('click',function(){
//   $(this).remove();


const $gifArea = $("#gifDiv");
const $searchInput = $("#search");


function appendGiphy(res){
    let numResults = res.data.length;
    if (numResults) {
      let randomIdx = Math.floor(Math.random() * numResults);
      let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
      let $newGif = $("<img>", {
        src: res.data[randomIdx].images.original.url,
        class: "w-100"
      });
      $newCol.append($newGif);
      $gifArea.append($newCol);
    }
}

$("form").on("submit", async function(evt) {
    evt.preventDefault();
    let searchTerm = $searchInput.val();
    $searchInput.val("");
    const url = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
    }
  });
  appendGiphy(url.data);

  $('#buttonRemove').on('click',function(e){
    e.preventDefault();
    $($gifArea).remove();
});
