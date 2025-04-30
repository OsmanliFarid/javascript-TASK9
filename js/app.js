const Boxs = document.querySelector("#Boxs")
const ENDPOINT = "http://localhost:3000/newestCourses"
const newUrl = "https://safavy-new.vercel.app/_next/static/media/shopicon.ec7427ea.svg"
const BoxShow = (url) =>{
  axios.get(url).then(({data}) =>{
    data.forEach(element => {
        if(element.courseType == 0){
            if(element.discount != 0){
                console.log(element);
                Boxs.innerHTML += `<div class="box">
            <img src="${element.image}" alt="" class="Img">
            <h1 class="BoxTitle">${element.title}</h1>
            <p class="BoxTitle2">${element.instructor}</p>
            <p class="BoxTitle3">${element.description}</p>
            <div class="stars-box">
                <p class="StarsTitle">${element.rating}</p>
                <div class="priceBox">
                <h1 class="price">${element.price}azn</h1>
                <h1 class="price2">${element.discount}azn</h1></div>
            </div>
            <button class="HredBtn">Etrafli</button>
        </div>`
            }
            
            
        }else{
            Boxs.innerHTML += `<div class="box">
            <img src="${element.image}" alt="" class="Img">
            <h1 class="BoxTitle">${element.title}</h1>
            <p class="BoxTitle2">${element.instructor}</p>
            <p class="BoxTitle3">${element.description}</p>
            <div class="stars-box">
                <p class="StarsTitle">${element.rating}</p>
                <h1 class="price">${element.price}azn</h1>
                
            </div>
            <div class="DescBox">
            <button class="HredBtn">Etrafli</button>
            <img src="${newUrl}" alt=""></div>
        </div>`
        }
        
    });
    
  })
}
BoxShow(ENDPOINT)