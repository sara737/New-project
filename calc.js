var text =document.getElementById('text');
var values ={prev: null ,new: null};
var operType = '';
var lastNumber = false;
function getNum(num)
{
    if(lastNumber){
        var result;
        if(values.new)
        {
            result=values.new + ''+num;
            values.new=result;
            text.value=result;
        }
        else
        {
            result=values.prev +''+num;
            values.prev=result;
            text.value=result;
        }
    }
    else{
        text.value=num;
    if(values.prev){
        values.new = num;
    }
    else
    {
        values.prev =num;
    }
    console.log(num)
    }
    lastNumber=true;
    
}
function getoperate(operate)
{
    text.value.operate;
    operType = operate;
    console.log(operate)
    lastNumber=false;
}
function Calculate()
{
    if(!values.new)
    {
        return;
    }
    if(values.new && values.prev && operType)
    {
        if(operType =='+'){
            var total = Number (values.prev) + Number (values.new);
            text.value= total;
            values.prev = total;
        }

        if(operType =='-'){
            var total = Number (values.prev) - Number (values.new);
            text.value= total;
            values.prev = total;
        }

        if(operType =='*'){
            var total = Number (values.prev) * Number (values.new);
            text.value= total;
            values.prev = total;
        }

        if(operType =='/'){
            var total = Number (values.prev) / Number (values.new);
            text.value= total;
            values.prev = total;     
        }
        




    }


}
