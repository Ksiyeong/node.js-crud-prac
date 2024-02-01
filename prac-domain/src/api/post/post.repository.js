"use strict";

const { db } = require("../../config/database");

module.exports = {
    save: (userId, title, content) => {
        return new Promise((resolve, reject) => {
            const query = 'INSERT INTO post (user_id, title, content) VALUES(?, ?, ?);';
            db.query(query, [userId, title, content], (error, data) => {
                if (error) reject(error);
                else resolve({ //OkPacket { affectedRows: 1, insertId: 4n, warningStatus: 0 }
                    affectedRows: data.affectedRows, // int
                    postId: data.insertId // Bigint
                });
            });
        });
    },

    findByPostId: (postId) => {
        return new Promise((resolve, reject) => {
            const query = `
            SELECT p.*, u.email FROM post p 
            INNER JOIN users u ON u.user_id = p.user_id
            WHERE p.post_id = ?;
            `;
            db.query(query, [postId], (error, data) => {
                if (error) reject(error);
                else resolve(data[0]);
            });
        });
    },
};
