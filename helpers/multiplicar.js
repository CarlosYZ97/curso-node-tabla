const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        const fs = require('fs');

        let salida, consola = '';

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} X ${index} = ${base * index}\n`;
            consola += `${base} ${'X'.green} ${index} = ${base * index}\n`;
        }

        if (listar) {
            console.log('==============================='.green);
            console.log('Tabla del:', colors.blue(base));
            console.log('==============================='.green);
            console.log(salida);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt creado`;
    } catch (error) {
        throw error;
    }


}

module.exports = {
    crearArchivo
}