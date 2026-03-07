import db from '../config/db.js';

export const getNotes = async (req, res) => {
   try {

      const userid = req.user.id;
      const page = Number(req.query.page);
      const limit = Number(req.query.limit);

      const offset = (page - 1) * limit;

      const result = await db.query(
         `SELECT *, COUNT(*) OVER() AS count
          FROM notes
          WHERE user_id = $1
          ORDER BY updated_at DESC
          OFFSET $2
          LIMIT $3`,
         [userid, offset, limit]
      );

      return res.json({
         success: true,
         notes: result.rows,
         count: result.rows.length ? result.rows[0].count : 0,
      });

   } catch (err) {

      console.error(err);
      res.status(500).json({ success:false });

   }
};
export const editNotes = async (req, res) => {
    try {
        const userid = req.user.id;

        const title = req.body.title;
        const text = req.body.text;
        const id = req.body.id;
        const mood = req.body.mood;
        const category = req.body.category;
        console.log(title);

        const result = await db.query(
            'UPDATE notes SET title =$1 ,text = $2,category=$3,mood=$4, updated_at = CURRENT_TIMESTAMP WHERE id =$5  RETURNING *',
            [title, text, category, mood, id]
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
        const mood = req.body.mood;
        const category = req.body.category;
        console.log(title);

        const result = await db.query(
            'INSERT INTO notes (user_id,title,text,category,mood) VALUES ($1,$2,$3,$4,$5) RETURNING *',
            [userid, title, text, category, mood]
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
