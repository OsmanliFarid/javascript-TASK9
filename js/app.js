const Boxs = document.querySelector("#Boxs")
const ENDPOINT = "http://localhost:3000/newestCourses"
const newUrl = "https://safavy-new.vercel.app/_next/static/media/shopicon.ec7427ea.svg"
const submit = document.querySelector("#submit")
  
const BoxShow = (url) => {
    Boxs.innerHTML = ""
    axios.get(url).then(({ data }) => {
      data.forEach(element => {
        let priceHTML = ''
        let originalPriceHTML = ''
        if (element.discount > 0) {
          originalPriceHTML = `<h1 class="price"">${element.price}azn</h1>`;
          priceHTML = `<h1 class="price2" id="price10">${element.discount}azn</h1>`
        } else {
          priceHTML = `<h1 class="price">${element.price}azn</h1>`
        }
  
        let imageElement = ''; 
        if (element.courseType === 0) {
          imageElement = `<img src="${newUrl}" alt="">`
        } else if (element.courseType === 1) {
          imageElement = `<img src="${newUrl}" alt="">`
        }
        Boxs.innerHTML += `
          <div class="box">
            <img src="${element.image}" alt="" class="Img">
            <h1 class="BoxTitle">${element.title}</h1>
            <p class="BoxTitle2">${element.instructor}</p>
            <p class="BoxTitle3">${element.description}</p>
            <div class="stars-box">
              <p class="StarsTitle">${element.rating}</p>
              ${originalPriceHTML}
              ${priceHTML}
            </div>
            <div class="DescBox">
              <button class="HredBtn">Etrafli</button>
              <i class="fa-solid fa-trash zibil_qabi" onclick="EditShow('${element.id}', '${ENDPOINT}')"></i>
              ${imageElement}
            </div>
            
          </div>
        `;
      });
    });
  };
  
BoxShow(ENDPOINT)

const EditShow = (id,url) =>{

axios.delete(url + "/" + id).then((element) =>{
    BoxShow(ENDPOINT)
})



}
submit.addEventListener("click",(e) =>{
    e.preventDefault()
    const title1 = document.querySelector("#title1")
    const title2 = document.querySelector("#title2")
    const title3 = document.querySelector("#title3")
    const title4 = document.querySelector("#title4")
    const title5 = document.querySelector("#title5")
    let newArr = {
        image: "../images/coursesimage.svg",
        title:title1.value,
        instructor:title2.value,
        description:title3.value,
        price:title4.value,
        rating:4.5

    }
    axios.post(ENDPOINT,newArr).then((element) =>{
        
        
        BoxShow(ENDPOINT)
    })
})