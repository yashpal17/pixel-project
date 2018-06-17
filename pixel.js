$(function(){

let colorPicker= $('#colorPicker');

const canvas = $('#pixel_canvas');

let heightInput = $('#input_height');

let widthInput = $('#input_width');


function makeGrid(){
    canvas.find('tbody').remove();

   let height = heightInput.val();

   let width = widthInput.val();

    canvas.append('<tbody></tbody>');

   let canvasBody = canvas.find('tbody');
    if(height>20 || width>20){
    	alert("limit cannot exceed 20");
    }
    else{
    for(let i=0;i<height;i++){
        canvasBody.append('<tr></tr>');
    }
    for(let i=0;i<width;i++){
        canvas.find('tr').append('<td class="transparent"></td>');
    }
}
}
$(document).ready(function(){
$('input[type="submit"]').on('click',function(e){
    e.preventDefault();
    makeGrid();
});

$('#pixel_canvas').on('click','td',function(e){
   let  color=colorPicker.val();
     let currentColor = $(this).css('background-color');
     console.log(currentColor+ " color:" + color);

     if($(this).hasClass('transparent')){
        $(this).toggleClass('transparent');
        $(this).css("background-color",color);
    }
    else{
        $(this).toggleClass('transparent');
        $(this).css("background-color",'transparent');
    }
    })

     });

    
});














