let stockRelojes = [];

class reloj {
    id;
    marca;
    modelo;
    precio;
    maquinaria;
    color;
    cantidad;
    imagen;

    constructor (id, marca, modelo, precio, maquinaria, color, cantidad, imagen){
        this.id = id;
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
        this.maquinaria = maquinaria
        this.color = color; 
        this.cantidad = cantidad;
        this.imagen = imagen;
    }
}
    
stockRelojes.push(
    new reloj (1, "Tag Heuer", 'Formula 1', 210, 'quartz', 'negro', 1, `./assets/img/destacado-1.png`),
    new reloj (2, "Tag Heuer", 'Fangio', 200, 'quartz', 'negro', 1, `./assets/img/destacado-2.png`),
    new reloj (3, "Tag Heuer", 'Aquaracer', 200, 'quartz', 'negro', 1, `./assets/img/destacado-3.png`),
    new reloj (4, "Tag Heuer", 'Aquaracer', 200, 'automatico', 'negro', 1, `./assets/img/destacado-4.png`),
    new reloj (5, "Tag Heuer", 'Carrera', 200, 'quartz', 'blanco', 1, `./assets/img/destacado-5.png`),
    new reloj (6, "Tag Heuer", 'Carrera', 200, 'quartz', 'negro', 1, `./assets/img/destacado-6.png`),
    new reloj (7, "Tag Heuer", 'Carrera', 200, 'quartz', 'silver', 1, `./assets/img/destacado-7.png`),
    new reloj (8, "Tag Heuer", 'GranCarrera', 200, 'quartz', 'blanco', 1, `./assets/img/destacado-8.png`),
    new reloj (9, "Tag Heuer", 'Carrera' , 200, 'quartz', 'negro', 1, `./assets/img/destacado-9.png`),
    new reloj (10, "Omega", 'Speedmaster', 200, 'quartz', 'azul', 1, `./assets/img/destacado-10.png`),
    new reloj (11, "Patek Philippe", 'Nautilus', 230, 'Automatico', 'azul', 1, `./assets/img/destacado-11.png`),
);
