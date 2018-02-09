const { hooks } = require('@adonisjs/ignitor')

hooks.after.httpServer(() => {
  const Eureka = use('MigFrankfurt/Adonis/Eureka') 
  Eureka.start()
})
