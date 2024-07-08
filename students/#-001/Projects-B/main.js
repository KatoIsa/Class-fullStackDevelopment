let search =document.getElementById('search');
let insert = document.querySelectorAll('.button');
let remove = document.querySelectorAll('.button2')
let check = document.getElementById('checkbox')

// takeing inputs 
insert.forEach(button=>{

    button.addEventListener('click',()=>{
        
        let input = search.value;
            console.log(input);
    })
})
    