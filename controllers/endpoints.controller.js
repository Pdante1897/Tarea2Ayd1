
function registrarEstudiante(req, res){
    const {Datos}  = req.body
    if(Datos == undefined){return res.status(400).send({Resultado: 'No se recibio Json'})}
    if(Datos["pass"] != Datos["confirmPass"]){return res.status(400).send({Resultado: 'Las contrasenias no coinciden'})}
    if (Datos["idUsuario"] == undefined || Datos["nombres"] == undefined || Datos["apellidos"] == undefined || Datos["correoElec"] == undefined || Datos["fechaNac"] == undefined || Datos["pass"] == undefined || Datos["confirmPass"] == undefined){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }else {
        return res.status(200).send({Resultado: 'Se registro correctamente'})
    }
}

function inicioSesion(req, res){
    const {Datos}  = req.body
    if(Datos == undefined){return res.status(400).send({Resultado: 'No se recibio Json'})}
    if (Datos["correoElec"] == undefined || Datos["pass"] == undefined){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }else {
        return res.status(200).send({Resultado: 'Se inicio sesion correctamente'})
    }
}

function asignacion(req, res){
    const {Datos}  = req.body
    if(Datos == undefined){return res.status(400).send({Resultado: 'No se recibio Json'})}
    if (Datos["idAsignacion"] == undefined || Datos["estudiante"] == undefined || Datos["curso"] == undefined || Datos["seccion"] == undefined || Datos["dia"] == undefined || Datos["hora"] == undefined){
        return res.status(400).send({Resultado: 'Hace falta uno o mas parametros'})
    }else {
        return res.status(200).send({Resultado: 'Se asigno curso correctamente'})
    }
}

module.exports={
    registrarEstudiante,
    inicioSesion,
    asignacion
}