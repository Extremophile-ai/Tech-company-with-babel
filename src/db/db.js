
import {Pool} from 'pg';
import dotenv from 'dotenv';
<<<<<<< HEAD
    

dotenv.config();
   
=======


dotenv.config();

>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db'); 
});


export default pool;


