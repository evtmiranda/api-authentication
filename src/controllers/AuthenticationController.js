import TokenGenerator from '../modules/TokenGenerator'

export const authenticate = async (req, res) => {
    try {
        let { username, password } = req.body

        if (!(username && password)) {
            res.status(400).json({
                success: false,
                message: 'Bad request.'
            })
        }

        const response = TokenGenerator.authenticate(username, password)

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