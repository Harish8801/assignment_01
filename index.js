container = document.getElementById("container")

let data = [];

fetch("https://akabab.github.io/superhero-api/api/all.json")
  .then(function (res) {
    return res.json();
  })
  .then(function (res) {
    data = res;
      console.log("data:", data);
      

      appendProducts(data)
  });




 

  function  appendProducts(data){
    data.map(function (el){
        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src = el.images.lg;
        let name = document.createElement("h3");
        name.innerText = el.name;
        let apriance=document.createElement("div");
        apriance.setAttribute("id","apriance")
        let gender=document.createElement("p");
        gender.innerText="gender :"+el.appearance.gender;

        let eyecolor=document.createElement("p")
        eyecolor.innerText="eyecolor :"+el.appearance.eyeColor;

        let work=document.createElement("div");
          work.setAttribute("id","work");
       let  occupation=document.createElement("P")
      
       occupation.innerText=el.work.occupation

        work.append(occupation)
        apriance.append(gender,eyecolor)

        
        let powerstats = document.createElement("p")
        powerstats.innerText = el.biography.fullName

        div.append(image,name,powerstats,apriance,work)
        container.appendChild(div)

    });
 

  }