import TokenGenerator from '../modules/TokenGenerator'

export const authenticate = async (req, res) => {
    try {
        let { email, userKey } = req.body

        if (!(email && userKey)) {
            res.status(400).json({
                success: false,
                message: 'Bad request.'
            })
        }

        const response = await TokenGenerator.authenticate(email, userKey)

        if (!response.success) {
            res.status(403).json(response)
        }

        res.json(response)
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error.'
        })
    }
}

export const index = async (_req, res) => {
    res.status(200).json({
        message: 'Hello'
    })
}