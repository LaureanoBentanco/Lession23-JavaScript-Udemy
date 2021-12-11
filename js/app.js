const Personas = [
    new Persona('Juan', 'Ortiz'),
    new Persona('Maria', 'Molina')
];

function mostrarPersonas(){
   let texto = "";
    for(persona of Personas){
        texto +=`<li> ${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona(){
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido  = forma ['apellido'];
    if(nombre.value !="" && apellido.value !=""){

        const persona = new Persona(nombre.value, apellido.value);
        Personas.push(persona);
        mostrarPersonas();

    }else{
        console.log("Coloque Un Nombre");
    }
    

}