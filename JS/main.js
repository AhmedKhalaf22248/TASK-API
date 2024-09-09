// let mm = new XMLHttpRequest();
// let tbody = document.querySelector("tbody");
// mm.open("GET", "https://jsonplaceholder.typicode.com/posts");
// mm.send();
// console.log(mm.readyState);
// mm.addEventListener("readystatechange", function () {
//   console.log(mm.readyState);
//   if (mm.readyState == 4) {
//     // console.log(mm.response);
//     let mydata = JSON.parse(mm.response);
//     console.log(mydata);
//     showdata(mydata);
//   }
// });

// function showdata(data) {
//   let cartona = "";
//   for (let i = 0; i < data.length; i++) {
//     cartona += `<tr>
//                 <td>${data[i].id}</td>
//                 <td>${data[i].tittle}</td>
//                 <td>${data[i].body}</td>

//             </tr>`;
//   }
//   tbody.innerHTML = cartona;
// }
let myhttp = new XMLHttpRequest();
let row = document.querySelector(".row");
let selectfood = document.querySelector("select");
let searchInput = document.querySelector("#searchInput");
selectfood.addEventListener("change", function () {
  getdata(selectfood.value);
});
getdata(`pizza`);

searchInput.addEventListener("blur", function () {
  let query = searchInput.value.trim();
  if (query === "") {
    query = "pizza";
  }
  getdata(query);
});
function getdata(data) {
  myhttp.open("GET", `https://forkify-api.herokuapp.com/api/search?q=${data}`);
  myhttp.send();

  myhttp.addEventListener("readystatechange", function () {
    if (myhttp.readyState == 4) {
      let alldata = JSON.parse(myhttp.response);
      console.log(alldata.recipes);
      showdata(alldata.recipes);
    }
  });
}

function showdata(arr) {
  let cartona = "";
  for (let index = 0; index < arr.length; index++) {
    cartona += ` <div class="col-md-4">
                  <img class="w-100 mb-2" src="${arr[index].image_url}" alt="${arr[index].title}" class="img-fluid">
                  <p><b>tittle:</b> ${arr[index].title}</p>
                  <p><b>ID:</b> ${arr[index].recipe_id}</p>
                  <p><b>Publisher:</b> ${arr[index].publisher}</p>
                </div>`;
  }
  row.innerHTML = cartona;
}
