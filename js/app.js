const Boxs = document.querySelector("#Boxs")
const ENDPOINT = "http://localhost:3001/newestCourses"
const newUrl = "https://safavy-new.vercel.app/_next/static/media/shopicon.ec7427ea.svg"
const submit = document.querySelector("#submit")
const BoxShow = (url) =>{
  axios.get(url).then(({data}) =>{
    data.forEach(element => {
        if(element.courseType == 0){
            if(element.discount != 0){
                Boxs.innerHTML += `<div class="box">
            <img src="${element.image}" alt="" class="Img">
            <h1 class="BoxTitle">${element.title}</h1>
            <p class="BoxTitle2">${element.instructor}</p>
            <p class="BoxTitle3">${element.description}</p>
            <div class="stars-box">
                <p class="StarsTitle">${element.rating}</p>
                <div class="priceBox">
                <h1 class="price">${element.price}azn</h1>
                <h1 class="price2">${element.discount}azn</h1>
                </div>
               
            </div>
            <button class="HredBtn">Etrafli</button>
                 <i class="fa-solid fa-trash zibil_qabi" onclick="EditShow('${element.id}', '${ENDPOINT}')"></i>

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
            <img src="${newUrl}" alt="">
            <i class="fa-solid fa-trash zibil_qabi" onclick="EditShow('${element.id}', '${ENDPOINT}')"></i>
            </div>
            
        </div>`
        }
        
    });
    
  })
}
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
        image: "/images/coursesimage.svg",
        title:title1.value,
        instructor:title2.value,
        description:title3.value,
        price:title4.value,
        rating:4.5

    }
    axios.post(ENDPOINT,newArr).then((element) =>{
        
        
        
    })
})