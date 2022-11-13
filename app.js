let list = document.getElementById("list")
let city = document.getElementById("city")

fetchData()
let dataArr = [];



async function fetchData() {
    let data = await fetch('http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}&city=["Des Moines","Chicago","Harper Woods"]&pretty=true')
    dataArr = await data.json()
    render(dataArr)
    return dataArr ;
}


function render(data) {
    for (let index = 0; index < data.length; index++) {
        let div = document.createElement("div")
        list.appendChild(div)
        div.setAttribute("class","card")

        let avatar =  document.createElement("div")
        div.appendChild(avatar);
        avatar.setAttribute("class", "avatar");
        avatar.textContent = `${data[index].fname[0]}${data[index].lname[0]}`

        let h4 = document.createElement("h4")
        div.appendChild(h4)
        h4.textContent = `${data[index].fname}  ${data[index].lname} `
        let span = document.createElement("span")
        div.appendChild(span)
        span.textContent = data[index].city

        
    }
}

function buttons() {
    let button1 = document.createElement("button")
    city.appendChild(button1)
    button1.textContent = "Des Moines" ;
    button1.value = "Des Moines" ;
    let button2 = document.createElement("button")
    city.appendChild(button2)
    button2.textContent = "Chicago" ;
    button2.value = "Chicago" ;
    let button3 = document.createElement("button")
    city.appendChild(button3)
    button3.textContent = "Harper Woods" ;
    button3.value = "Harper Woods" ;
    button1.addEventListener("click",filter)
    button2.addEventListener("click",filter)
    button3.addEventListener("click",filter)

}

 async function filter(e) {
    e.preventDefault()
    console.log(e.target.value);
    let cityFiltered = e.target.value
    let result = await dataArr.filter( element => element.city == cityFiltered);
    list.textContent="";
    render(result)
}
buttons()

