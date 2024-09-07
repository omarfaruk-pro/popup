   let clickBtn = document.querySelector(".click-button");
        let popup = document.querySelector("#popup");
        let body= document.querySelector("body");
        let closepopup = document.querySelector(".popup-close")


        clickBtn.addEventListener("click", () => {
            popup.classList.add("open");
        })
        closepopup.addEventListener("click", () => {
            popup.classList.remove("open");
        })
        body.addEventListener("click", (event) => { 
            if(event.target.id==="popup"){
                popup.classList.remove("open");
            }
        })
