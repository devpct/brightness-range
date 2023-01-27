let range = document.getElementById('range')
let main = document.querySelector('main')


range.addEventListener('change',(event)=>{
    main.style.filter = 'brightness('+ event.target.value +'%)'
})