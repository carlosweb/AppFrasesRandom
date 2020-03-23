"use strict"
// const frases = ['Os problemas são oportunidades para se mostrar o que sabe.', 'Nossos fracassos, às vezes, são mais frutíferos do que os êxitos.', 'Cada cliente é como se fosse primeiro e único', 'A felicidade não está em fazer o que a gente quer, e sim querer o que a gente faz', 'Nada acontece a menos que sonhemos antes', 'Jamais prometa mais do que pode fazer', 'Se você for direto e honesto com seus clientes eles o tratarão como amigo', 'Não arriscar nada é arriscar tudo']
// const color = ['#FFC312','#C4E538','#12CBC4','#FDA7DF','#ED4C67','#F79F1F', '#A3CB38', '#1289A7', '#D980FA', '#0652DD', '#f7d794', '#e77f67', '#63cdda', '#dfe6e9', '#d63031']

// document.querySelector('.bt').addEventListener('click', (event) =>{
//     event.preventDefault()
//     let next = document.querySelector('.mostrar')
//     next.innerHTML = frases[Math.floor(Math.random()*frases.length)]

//     color.forEach( () => {
//         document.body.style.background = color[Math.floor(Math.random()*color.length-1)]
//     })
// })


document
.querySelector('#bt-menu')
.addEventListener('click', function(){
    document
    .querySelector('.sidebar')
    .classList.toggle('close')
})


let btn = document.querySelector('#bt')

//mostrar dados JSON
function showDb() {

    let ajax = new XMLHttpRequest()
    ajax.open('GET', 'frases.json')
    ajax.onreadystatechange = function() {
    
        //teste de status
        if(ajax.status === 200 && ajax.readyState === 4) {
            //transforma o JSON em Objeto
            let res = JSON.parse(ajax.responseText)
            let dados = res.dados
            let next = document.querySelector('.mostrar')
            let fontColor = document.querySelector('h2')
            document.getElementById('img')
            let currentLink = window.location.href
  
            for (let i = 0; i < dados.length; i++){
                next.innerHTML = dados[i].frases[Math.floor(Math.random()*dados[i].frases.length)]
                // var rand = Math.floor(Math.random()*dados[i].images.length)
                // var links = dados[i].images
                // img.innerHTML = `<img src="${currentLink}${links[rand]}" id="images">`
                // fontColor.style.color = dados[i].color[Math.floor(Math.random()*dados[i].color.length)]
            }
        }
    }
    ajax.send()
}
btn.addEventListener('click', showDb, false)





// "color": ["#FFC312", "#C4E538", "#12CBC4", "#FDA7DF", "#ED4C67", "#F79F1F", "#A3CB38", "#1289A7", "#D980FA", "#0652DD", "#f7d794", "#e77f67", "#63cdda"],


