const photos = document.querySelectorAll("img")
let photolist =photos
photolist.forEach((item)=>{
  item.addEventListener("click", function(){
    console.log(item.width)
 
  })
})

