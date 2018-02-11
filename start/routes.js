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
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')
const axios = require('axios')
const Eureka = use('MigFrankfurt/Adonis/Eureka')

Route.get('/news/:text', async ({params}) => {

  const app1 = Eureka.getInstances('APP1')

  var app1Path = app1[0].hostName+":"+app1[0].port.$;

  const result = await axios.get(`http://${app1Path}/get_text/${params.text}`)
  return { response: result.data.message }
})
