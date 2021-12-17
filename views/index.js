$(document).ready(function(){
    console.log('Funciona')
    fetch('http://localhost:3100/api/user')
    .then(response => response.json())
    .then(data => {

        for(let i of data.data){
            $('#usuarios').append(''+
            '<div class="row">'+
                '<div class="col-4"><p>'+i.name+'</p></div>'+
                '<div class="col-4"><p>'+i.age +'</p></div>'+
                '<div class="col-4"><p>'+i.createAt+'</p>'+
                '<button type="button" class="btn btn-danger del_btn" value="'+i._id+'">Borrar</button>'+
                '<button type="button" class="btn btn-dark edit_btn ml-2" value="'+i._id+'">Editar</button></div>'+
                
            '</div>')
        
        }
      
        
    })
    let clear= function(){
        $('#name').val(' ')
        $('#age').val(' ')
    }

    $(document.body).on('click', '.del_btn',function(){
     
    })
    $(document.body).on('click','.edit_btn',function(){
        console.log(this.value)
    })
    clear() 
    $('#add').click(async function () { 
        let valor = $('#name').val()
        let edad = $('#age').val()
        console.log(valor, edad)

        let body = {
            "name": valor,
            "age": edad
        }
        

        let response = await fetch('http://localhost:3100/api/user',{
            method:'POST',
            body: JSON.stringify(body),
            headers:{
                'Content-Type': 'application/json'
              }

        })
        response = await response.json()
        console.log(response)
        clear()
        
    });



    
})