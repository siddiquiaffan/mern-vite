import express, { Response, Request } from 'express'


const router = express.Router()

router.get('/data', (req: Response, res: Request) => {
    // logic to fetch data
    const data = {
        name: 'John Doe'
    }
    res.json(data)
})

export default router