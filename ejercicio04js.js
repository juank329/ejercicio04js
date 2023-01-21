

let nombre = "Juan";
console.log(nombre);

let apellido ="Avendaño";
console.log(apellido);

let estudiante = nombre + " " + apellido;
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let numLetras = estudiante.length;
console.log(numLetras);

let primeraLetraNombre = nombre.charAt(0);
console.log(primeraLetraNombre);

let ultimaLetraApellido = apellido.charAt(apellido.length - 1);
console.log(ultimaLetraApellido);

let estudianteSinEspacios = estudiante.replace(/ /g, "");
console.log(estudianteSinEspacios);

let nombreEnEstudiante = estudiante.includes(nombre);
console.log(nombreEnEstudiante);










