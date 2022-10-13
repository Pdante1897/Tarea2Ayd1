const app2 = require ('../routes/endpoints.route')
const request = require ('supertest')


describe('POST /registroEstudiante',()=>{
    let habCorrect={
        "Datos":{
            "idUsuario": 5,
            "nombres" : "Bryan",
            "apellidos": "Paez",
            "correoElec": "bryanpaez@ayd1.com",
            "fechaNac" : "1997-04-18",
            "pass": "contrasenia",
            "confirmPass": "contrasenia"
        }
    }
    
    let habIncorrect={
        "Datos":{
            "idUsuario": 5,
            "nombres" : "Bryan",
            "apellidos": "Paez",
            "pass": "contrasenia",
            "confirmPass": "contrasenia"
        }
    }

    test('tendria que responder con un estado de codigo 200 si encuentra el endpoint', async()=>{
        const response = await request(app2).post('/registroEstudiante').send(habCorrect)
        //console.log(response);
        expect(response.statusCode).toBe(200);
    });

    test('deberia reponder con un estado de codigo 200 si el contenido es json', async ()=>{
        const response = await request(app2).post('/registroEstudiante').send(habCorrect)
        //console.log(response);
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    });
    
    test('tendria que responder con un estado de codigo 400 si no se envia nada', async()=>{
        const response=await request(app2).post('/registroEstudiante').send()
        //console.log(response.body);
        expect(response.statusCode).toBe(400);
     });
    
     test('tendria que responder con un estado de codigo 400 faltan uno o mas parametros', async()=>{
         const response=await request(app2).post('/registroEstudiante').send(habIncorrect)
         //console.log(response.body);
         expect(response.statusCode).toBe(400);
      });
});