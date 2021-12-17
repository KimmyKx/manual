form1.addEventListener("submit", e => {
    e.preventDefault()
    const content = document.querySelector(".content")
    const li = document.createElement("li")
    li.innerText = input1.value
    text.appendChild(li)
    input1.value = ""
    content.scrollTop = content.scrollHeight - content.clientHeight
})