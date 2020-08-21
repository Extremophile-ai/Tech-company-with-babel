import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
    getAllNgTechCompanies,  
    getNgTechCompanyById, 
    createNewTechCompany, 
    updateTechCompanyInfo, 
    deleteTechCompany
} from './controllers';
<<<<<<< HEAD
                
=======

>>>>>>> 1544b181d8c553a62616cfcf5a2919279f2a7f41

const app = express();
app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());

  
app.get('/', (req, res)=>{
  res.send('Top Tech companies in Nigeria!')
});

// GET ALL NIGERIAN TECH COMPANIES IN THE DB
app.get('/company', getAllNgTechCompanies );

// GET ONE TECH COMPANY
app.get('/company/:id', getNgTechCompanyById); 


// CREATE NEW COMPANY AND ADD TO THE DB
app.post('/company/create', createNewTechCompany );

// UPDATE TECH COMPANY INFO
app.put('/company/:id', updateTechCompanyInfo);

// DELETE TECH COMPANY
app.delete('/company/:id', deleteTechCompany);




app.listen(process.env.PORT || 3003, () => {
  console.log('Connected') 
});

// app.listen(3003, ()=> { 
//     console.log('Server started!!') 
// });