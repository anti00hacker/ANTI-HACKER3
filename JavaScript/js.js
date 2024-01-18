function JSalert(){
    if(document.getElementById('chck').checked)
    {
        window.location.href="info.html";
    }
    else{
        alert('شما هنوز قوانین و شرایط سایت را نپذیرفته اید!');
    }
}
function Next(){
    var inp=document.getElementById('inp').value;
    if(1000>=inp&&inp>0)
    {
        if(inp!="")
        {
            setTimeout(function () {window.location.href="login.html";},2000);
        }
        else{
            alert('مقدار فالوور درخواستی باید بیشتر از صفر باشد!');
        }
    }
    else{
        alert('مقدار فالوور درخواستی باید عددی بین 1 تا 1000 باشد!');
    }
}
function Close(){
    window.location.href="index.html";

}