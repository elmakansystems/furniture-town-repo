window.onload = ()=>{
    const imgs = document.querySelectorAll(".logo-cont")
    const images = document.querySelectorAll(".logo-cont img")
    const main = document.querySelector(".main-logo img")
    const mainLogo = document.querySelector(".main-logo")
    let time = 45
    let activeTime = 3000
    
    
    
    
      const classes = ()=>{
          setTimeout(() => {
            let i =0
            const classes = setInterval(() => {
                let addClasses =  `l${i+1}`
                imgs[i].classList.add(addClasses)
                images[i].style.boxShadow="0px 2px 6px 0px rgba(0, 0, 0, 0.1)"
                i++
                if(i===16) clearInterval(classes)
            }, time)
        }, 1500)
      }

      // add line classes to the logos
      classes()
    
      const removeClasses = ()=>{
      const imgs = document.querySelectorAll(".logo-cont")
      imgs.forEach(img=>{
      const hasClass = img.classList.contains("active")
      if(hasClass) {
      img.classList.remove("active");
      img.children[1].classList.remove("show-card")
      }
      })
      }
      // show cards one by one
      const display = ()=>{
        let count = 0
        setTimeout(() => {
          main.style.backgroundColor = "transparent"
          mainLogo.style.backgroundColor = "transparent"
        setInterval(() => {
            let activeClass =  `active`
            removeClasses()
            imgs[count].classList.add(activeClass)
            imgs[count].children[1].classList.add("show-card")
            count++;
            if(count === imgs.length) count = 0
        }, activeTime)
      }, activeTime)
      }
      display()
// const fetchMusic = async ()=>{
//   // let api = await fetch("https://music-api.seada.tech/")
//   // let data = await api.json()
//   document.getElementById("music").src = data.src
// }
// // setTimeout(() => {
// //   fetchMusic()
// // }, 3000)

setTimeout(() => {
  document.getElementById("music").play()
}, activeTime)







}
