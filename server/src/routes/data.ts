import express, { Response, Request } from 'express'


const router = express.Router()

router.get('/data', (req: Request, res: Response) => {
    // logic to fetch data
    const data = {
        name: 'John Doe'
    }
    res.json(data)
})

export default router