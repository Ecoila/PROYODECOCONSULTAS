var express = require('express');
var router = express.Router();
var reclamoController=require('../controllers/reclamoController');

/*var reclamo={tipoReclamo:'Odeco',
				observacion:'mal servicio',
				fecha:'26-03-1999'};
 GET home page
router.get('/inicio', function(req, res, next) {
  res.render('index',{ title:'Proyecto Final',
  											subtitle:'Avances en Computacion'
                        reclamo:reclamo});
});*/
router.get('/',reclamoController.principal);
router.get('/registroReclamos',reclamoController.registroReclamo);
router.post('/guardarReclamos',reclamoController.guardarReclamo);
router.get('/listaReclamos',reclamoController.listaReclamo);
router.post('/muestraReclamo',reclamoController.muestraReclamo);

router.get('/fechaReclamos',reclamoController.fechaReclamo);
router.get('/respuestaReclamos',reclamoController.respuestaReclamo);

/*router.get('/inicios', function(req, res, next) {
  res.render('index',{ reclamo:reclamo });
});
router.get('/registroReclamos', function(req, res) {
  res.render('registroReclamo', {reclamo: reclamo });
   });
router.get('/listaReclamos', function(req, res) {
  res.render('listaReclamo', {reclamo: reclamo });
   });*/


//para la reproduccion de la fecha
//router.get('/fechas',fechaController.index);
//router.get('/fechas:fecha(\\d+)',fechaController.show);
//router.get('/fechas:fecha(\\d+)/answer',fechaController.fecha);
module.exports = router;