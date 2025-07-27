const express =require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const fs = require('fs');
const marked = require("marked");
const path = require('path')
const PORT=3001;
app.use(cors());
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true }));
//Sample Data
const data=[
    {
      "id": 1,
      "Name": "Hari",
      "Email": "hariraghava21s@gmail.com",
      "Phone": "8778946475",
      "Gender": "male"
    },
    {
      "id": 2,
      "Name": "Raghav",
      "Email": "hariraghav@gmail.com",
      "Phone": "8773245687",
      "Gender": "male"
    },
    {
      "id": 3,
      "Name": "Jeevi",
      "Email": "jeevi@gmail.com",
      "Phone": "8771256487",
      "Gender": "female"
    }
  ];

app.get('/', (req, res) => {
  const readmePath = path.join(__dirname, 'README.methods.md'); // Adjust path if README is elsewhere

  fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Could not load README file');

    const html = marked.parse(data);
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Project README</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; }
          pre, code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
          h1, h2, h3 { color: #2c3e50; }
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `);
  });
});

//Post Method:To add data to the array
app.post('/datapost',(req,res,next)=>{
    const {Name,Email,Phone,Gender}=req.body;
    const clientdata={
        id:data.length+1,
        Name,
        Email,
        Phone,
        Gender
    };
    data.push(clientdata);
    // console.log(data);
    res.status(201).send("Data Recieved");

});

//Get Method:To get all the data from the data array
app.get('/datapost',(req,res,next)=>{
    res.json(data);
});

//Get Method:To get particular data from the data array
app.get('/datapost/:id',(req,res,next)=>{
    const id = req.params.id;
    const uqdata=data.filter(item => item.id == id);
    if(uqdata.length>0){
        res.json(uqdata);
    }
    else{
        res.status(404).send("User details not found")
    }
});

//Put Method:To update the data based on their id
app.put("/datapost/:id", (req, res, next) => {
    const { Name, Email, Phone, Gender } = req.body;    
    const id = req.params.id; // Get the ID from URL parameter

    // Create a new updated client data object
    const clientdataupdated = {
        id: parseInt(id),
        Name,
        Email,
        Phone,
        Gender
    };
    if(Name!==''&& Email!==''&& Phone!==''&& Gender!==''){
        // console.log(id);
        const found = data.filter(item => item.id == id);
        // console.log(found);
        if (found.length > 0) {
            // Update the existing client data in the original array using map
            data.forEach((item, index) => {
                if (item.id == id) {
                    data[index] = clientdataupdated; 
                }
            });
            res.json(data);
        } else {
            res.status(404).json({ message: "Client not found" });
        }
    }
    else{
        res.status(204).send("Enter a valid value")
    }

});

//Delete Method:To delete particular data from the data array
app.delete("/datapost/:id", (req, res, next) => {
    const id = parseInt(req.params.id); // Extract and parse the id
    // console.log(id);
    data.splice(id-1,1);
    res.json(data);

});

app.listen(PORT,()=>(
    console.log(`Server is listening on http://localhost:${PORT}`)
));