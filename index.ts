import db from './database';
import path from 'path';
import xlsx from 'xlsx';

db.query("SELECT * FROM USER;", (err, res, fields)=>{
    console.log(res);
    
    const book = xlsx.utils.book_new();

    const filename = `excel_${new Date().getTime()}.xlsx`
    const filepath = path.join('public', filename);
    
    const fileSheet = xlsx.utils.json_to_sheet(res);

    xlsx.utils.book_append_sheet(book, fileSheet);
    xlsx.writeFile(book, filepath);

    db.destroy();
})