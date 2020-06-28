
function getnumbers(num)
{
    
var result=document.getElementById("text");

if(num!='')
{
result.value +=num;
}

}




function clear_text()
{
    
var result=document.getElementById("text");
result.value="";
}


function show_result()
{
    var result=document.getElementById("text");
    result.value=eval(result.value);

}


