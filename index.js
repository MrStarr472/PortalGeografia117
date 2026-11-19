const tema = document.getElementById('Tema')
let claro = true

document.addEventListener("DOMContentLoaded", () => {
    tema.style.backgroundColor='#e2e6cb'
});


tema.addEventListener("click" ,() => {
    if(claro)
    {
    tema.style.backgroundColor= '#22415c'
    tema.style.color= 'var(--card)'
    document.querySelector('body').style.backgroundColor= '#000000' //PlaceHolder
    }
    else
    {
    tema.style.backgroundColor= '#e2e6cb'
    tema.style.color= 'var(--texto)'
    document.querySelector('body').style.backgroundColor= '#ffffff'
    }
    claro=!claro
    
    
        //Aqui devia mudar a paleta de cores 
        //Dicas:
        //  Sla, se vira
    });