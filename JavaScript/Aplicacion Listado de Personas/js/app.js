const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Alma', 'Reyes'),
    new Persona('Matias', 'Perez')
];

function mostrarPersonas(){
    console.log('Ejecutando metodo mostrarPersonas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];
    if(nombre.value && apeliido.value){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion para agregar');
    }
}