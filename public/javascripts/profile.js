const img = document.querySelector("#profilephoto")
const setDpForm = document.querySelector("#setdpform input[type='file']")
const icon = document.querySelector("#profilephoto i")


img.addEventListener("click", () => {
    setDpForm.click()
})

setDpForm.addEventListener("change", () => {
    document.querySelector("#setdpform").submit()
})


const postEditBtn = document.querySelectorAll("#posteditbtn")
const postEditForm = document.querySelector("#editpostform")

postEditBtn.forEach((e) => {
    e.addEventListener("click", async (data) => {
        postEditForm.style.display = "block"
    })
      
    })

