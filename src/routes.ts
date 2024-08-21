import express from 'express'
import createUserController from './controllers/create-user-controller'

const router = express.Router()

router.get('/', (request, response) => {
  response.status(200).send('Ok!')
})

router.post('/user', async (request, response) => {
  await createUserController.handle(request, response)
})

export default router
