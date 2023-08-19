let links = [
    {
        name:"youtube",
        icon:"./images/youtube.svg"
    },{
        name:"telegram",
        icon:"./images/telegram.svg"
    },{
        name:"facebook",
        icon:"./images/facebook.svg"
    },{
        name:"instagram",
        icon:"./images/instagram.svg"
    },{
        name:"Our website",
        icon:"./images/google.svg"
    }
]

let links_div = document.querySelector('#links')

links.map(link=>{
    const element = `
        <a href="#" class='link'>
            <div class='icon'>
                <img src=${link.icon} alt=${link.name}>
            </div>
            <p>${link.name}</p>
        </a>
    `
    links_div.innerHTML += element
})