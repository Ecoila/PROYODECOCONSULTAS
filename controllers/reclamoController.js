var models=require('../models/models.js');


exports.principal = function(req, res, next) {
                    models.reclamo.findAll().then(function(Reclamo){
                    res.render('index',{ title:'Proyecto Final', 
		                           		subtitle: 'Avances en computacion',
		                           		reclamo:reclamo});
                    });
					 };
exports.registroReclamo = function(req, res) {
 		       			var reclamo={tipoReclamo:'ODECO 1',
 		       						 observacion:'mal servicio',
 		       						 fecha:'26/09/1998'}
 		       			res.render('registroReclamo',{reclamo: reclamo });
		  				 };

exports.guardarReclamo = function(req, res) {
 		       			console.log('ingresa a guardar');
 		       			reclamo=models.reclamo.build(req.body.reclamo);
 		       			reclamo.save({fields:['tipoReclamo',
 		       									'observacion',
 		       									'fecha']})
 		       			.then(function(){console.log('ingresa a redirect');
 		       			res.render('respuestaReclamo',
 		       			{mensaje: 'Reclamo Guardado'});
 		       			}) ;
 		       		}

exports.respuestaReclamo = function(req, res) {
 		       			res.render('respuestaReclamo',
 		       			{title:'realizo su reclamo',
 		       				mensaje: 'Reclamo Guardado'});
		  				 };
		  				 
exports.listaReclamo = function(req, res) {
 		       			res.render('listaReclamo',
 		       			{title:'seleccion por fecha',
 		       				reclamo: reclamo });
		  				 };

exports.muestraReclamo = function(req, res) {
 		       			models.reclamoModels.findAll().then(function(muestraReclamo){
 		       			res.render('views/listaReclamo',
 		       			{title:'seleccion por fecha',
 		       				reclamo: reclamo });
		  				 })};
		  				 

exports.fechaReclamo = function(req, res) {
 		       			res.render('fechaReclamo',
 		       			{title:'fecha',
 		       				reclamo: reclamo });
		  				 };



