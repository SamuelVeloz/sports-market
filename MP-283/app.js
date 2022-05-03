const main = document.getElementById('main-market');
const selectproducts = document.getElementById("select-products");

window.addEventListener('load',loadselect);

function loadselect(){
products.map(element =>{
    const opt = document.createElement('option');
    opt.textContent = element.name;
    opt.value = element.name;
    selectproducts.appendChild(opt);
});
}
