window.onload = ()=>{
    const imgs = document.querySelectorAll(".logo-cont")
    const images = document.querySelectorAll(".logo-cont img")
    const main = document.querySelector(".main-logo img")
    let time = 45
    let activeTime = 3000
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
        let count = 0
      setTimeout(() => {
          main.style.backgroundColor = "transparent"
        setInterval(() => {
            let activeClass =  `active`
            removeClasses()
            imgs[count].classList.add(activeClass)
            imgs[count].children[1].classList.add("show-card")
            count++;
            if(count === imgs.length) count = 0
        }, activeTime)
      }, activeTime)

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

// let txtContainer = document.getElementById("hero-header")
// let txt = document.getElementById("hero-header").textContent
// txt = txt.split(" ")
// let spans = ""
// txt.map(t =>{
//     return spans += `<span>${t}</span> \n`
// })
// txtContainer.innerHTML = spans
// setTimeout(() => {
//     const spans = document.querySelectorAll("#hero-header span")
//     let i =0
//         let spanInterval = setInterval(() => {
//                 spans[i].classList.add("move-up")
//                 i++
//                 if (i===spans.length) clearInterval(spanInterval)
//         }, 100)
        
// }, activeTime)




}