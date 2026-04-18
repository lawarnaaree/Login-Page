import pool from '../config/db'

export const usersModel = {

    getAll: async () => {
        const [rows] = await pool.query(
            'SELECT * FROM users'
        );

        return rows;
    },

    getById: async (id) => {
        const [result] = await pool.query(
            'SELECT * FROM users WHERE id = ?', [id]
        );

        return result;
    }
}