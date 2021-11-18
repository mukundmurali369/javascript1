function add()
{
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let z=x+y;
    document.getElementById("c").value=z;
}
function sub()
{
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let z=x-y;
    document.getElementById("c").value=z;
}
function mult()
{
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let z=x*y;
    document.getElementById("c").value=z;
}
function div()
{
    let x=parseInt(document.getElementById("a").value);
    let y=parseInt(document.getElementById("b").value);
    let z=x/y;
    document.getElementById("c").value=z;
}