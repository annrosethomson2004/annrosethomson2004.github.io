function calculate(){
    inputElement = document.getElementById("sample").value;
    answer=eval(inputElement)
    console.log(answer);
    document.getElementById("sample").value = answer
}