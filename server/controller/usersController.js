import { usersModel } from '../model/usersModel.js'

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await usersModel.getAll();

        res.status(200).json({
            success: true,
            count: users.length,
            data: users
        })
    }

    catch (error) {
        next(error)
    }
}