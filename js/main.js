function servicios(params) {
    let iterador = true
    while (iterador) {
        let servicio = prompt("Seleccione el número del servicio que desea contratar: ");
        if (Number(servicio) === 1) {
                alert("El servicio que desea contratar es Landing");
                iterador = false;
        } else if (Number(servicio) === 2) {
            alert("El servicio que desea contratar es E-commerce");
            iterador = false;
        }else {
            alert("El servicio seleccionado no es correcto, vuelva a intentar.");
        }
    }
}
