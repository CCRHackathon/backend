'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

/* Locais */
Route.get('/api/place', 'PlaceController.index')

Route.post('/api/place', 'PlaceController.store')

/* Avaliações */
Route.post('/api/ratings', 'RatingController.store')

Route.get('/api/ratings/place/:placeId', 'RatingController.showByPlace')

/* Transmissões */
Route.post('/api/transmission', 'TransmissionController.store')

/* Categorias */
Route.post('/api/category', 'CategoryController.store')
