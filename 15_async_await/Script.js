let getData = async () => {
  try {
    let f = await fetch("https://fakestoreapi.com/products");
    console.log(f);

    let j = await f.json();
    console.log(j);

    j.map((ele) => {
        let ol = document.querySelector("ol");
        let li = document.createElement("li");
      ol.appendChild(li);
      console.log(ele.title);
      li.innerHTML = ele.title;
    });
  } catch (error) {
    console.log(error);
  }
};

getData();
