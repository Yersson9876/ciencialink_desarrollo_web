let darkmode = false;

document.querySelector('a[href="#darkmode"]').addEventListener('click', function(){
    if (darkmode){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "black";
    } else {
        document.body.style.backgroundColor = "#2d4a5e";
        document.body.style.color = "white";
    }
    darkmode = !darkmode;
});

/* window.onload = function() {
            alert("Bienvenido a la Panadería Delicias. Disfruta de nuestros productos frescos y deliciosos.");
            alert("Hoy hay promo especial: ¡Compra 2 panes y llévate el tercero gratis!");
        };

document.querySelector('a[href="#quienes-somos"]').addEventListener('click', function(){
    alert("Hizo click en el evento de 'Quiénes Somos'.");
   setTimeout(function(){
    document.body.style.backgroundColor = "#2d4a5e";
   }, 3000);
});

document.querySelectorAll('.btn-warning').forEach(function(btn){
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const producto = btn.closest('.card').querySelector('.card-text').textContent;
        alert('Solicitando información sobre: ' + producto);
    });
});

document.querySelectorAll('.btn-danger').forEach(function(btn){
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        alert('¡Gracias por tu interes en comprar el producto!');
        setTimeout(function(){
            window.location.href = btn.getAttribute('href');
        }, 2000);
    });
});*/