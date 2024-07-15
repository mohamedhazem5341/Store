const btn = document.querySelector(".btn");
const addsection = document.querySelector(".add-section");
const donebtn = document.querySelector(".done-btn");
const closepage = document.querySelector(".icon-cross");
const prodname = document.querySelector(".input-2");
const prodabout = document.getElementById("about-product");
const prodimg = document.getElementById("file-upload");
const main = document.getElementById("main");
const del = document.querySelector(".del-btn");

btn.addEventListener("click", (eo) => {
  addsection.classList.add("d-b");
});

closepage.addEventListener("click", (eo) => {
  addsection.classList.remove("d-b");
});

donebtn.addEventListener("click", (eo) => {
  eo.preventDefault();

  // Get the selected file
  const file = prodimg.files[0];

  // Create a FileReader object to read the file
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    const newcard = `<div class="card">
      <div class="card-img1">
        <img class="card-img" src="${reader.result}" alt="Uploaded Image" />
      </div>

      <div class="card-name">
        <h2>${prodname.value}</h2>
      </div>
      <div class="card-about">
        <p>${prodabout.value}</p>
      </div>

      <div class="card-btn">
        <button class="del-btn">delete</button>
        <button class="buy-btn">Buy</button>
      </div>
    </div>`;

    addsection.classList.remove("d-b");
    main.innerHTML += newcard;

    prodimg.value = "";
    prodname.value = "";
    prodabout.value = "";
  };
  // Read the image file as a data URL
});

main.addEventListener("click", (eo) => {
  if (eo.target.classList == "del-btn") {
    const card = eo.target.parentElement.parentElement;

    card.classList.add("del");

    card.addEventListener("transitionend", (eo) => {
      card.remove();
    });
  }
});


if (main == null) {
    (eo) => {
       main.innerHTML += `<h4>Add your product here</h4>` 
    }
} else {
    
}