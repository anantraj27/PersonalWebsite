import db from '../config/db.js';

export const getNotes = async (req, res) => {
    try {
        const userid = req.user.id;

        const result = await db.query('SELECT * FROM notes WHERE user_id =$1', [userid]);

        if (result) {
            return res.json({
                success: true,
                message: 'saved succesfully ..🐘',
                notes: result.rows,
            });
        }
    } catch (error) {
        res.status(500).json({ success: false });
    }
};

export const editNotes = async (req, res) => {
    try {
        const userid = req.user.id;

        const title = req.body.title;
        const text = req.body.text;
        const id = req.body.id;
        console.log(title);

        const result = await db.query(
            'UPDATE notes SET title =$1 ,text = $2  WHERE id =$3  RETURNING *',
            [title, text, id]
        );

        if (result) {
            return res.json({
                success: true,
                message: 'saved succesfully ..🐘',
                notes: result.rows,
            });
        }
    } catch (error) {}
};

export const addNotes = async (req, res) => {
    try {
        const userid = req.user.id;

        const title = req.body.title;
        const text = req.body.text;
        console.log(title);

        const result = await db.query(
            'INSERT INTO notes (user_id,title,text) VALUES ($1,$2,$3) RETURNING *',
            [userid, title, text]
        );

        if (result) {
            return res.json({
                success: true,
                message: 'saved succesfully ..🐘',
                notes: result.rows,
            });
        }
    } catch (error) {}
};
