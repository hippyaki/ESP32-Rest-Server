require("dotenv").config();

const express = require("express");

//mongoose connection
const connectDB = require("./connection");

// mongoose model
const deviceModel = require("./device");

const app = express();

// configuration
app.use(express.json());


// GET
// route: /
// description: To get all device
// parameter: none 
app.get("/", async (req, res) => {
    
    const device = await deviceModel.find();
    return res.json({device});

}); 

// GET
// route: /device/:_id
// description: To get device with 'id'
// parameter: _id 
app.get("/device/:_id", async (req, res) => {
    
    try{
        const { _id } = req.params;
        const device = await deviceModel.findById(_id);
        if (!device){
            return res.json ({message: "invalid ID"});
        }
        return res.json ({ device });
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
    
    
});


// GET
// route: /device/name/:name
// description: To get all device with 'name'
// parameter: name 
app.get("/device/name/:name", async (req, res) => {
    try {
        const { name } = req.params;
        const device = await deviceModel.find({name: name});
        if (!device){
            return res.json({message: "No device found"});
        }   
        return res.json ({ device });
    } 
    catch(error) {
        return res.status(500).json({error: error.message});
    }
    
});


// POST
// route: /device/new
// description: To add new device
// parameter: none 
// request body: device object
app.post("/device/new", async(req, res) => {

    try{
        const { newdevice } = req.body;
        await deviceModel.create(newdevice);
        const { _id } = req.params;
        return res.json({message: "Device Created"});
    } 
    catch(error){
        return res.status(500).json({error: error.message});
    }
    
});

// PUT
// route: /device/update/:_id
// description: To update a device
// parameter: _id 
// request body: device object
app.put("/device/update/:_id", async (req, res) => {

    try {
        const { _id } = req.params;
        const { deviceData } = req.body;
        const updatedevice = await deviceModel.findByIdAndUpdate(
            _id,
            { $set: deviceData},
            { new: true}     
        );
        return res.json({device: updatedevice});  
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
       
});


// DELETE
// route: /device/delete/:_id
// description: To delete a device
// parameter:  
// request body: none
app.delete("/device/delete/:_id", async (req, res) => {
    try{
        const { _id } = req.params;
        await deviceModel.findByIdAndDelete(_id);
        return res.json({message: "device Deleted 🔪"});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
    
});


// route: /device/delete/name/:name
// description: To delete a device with name
// parameter: name
// request body: none
app.delete("/device/delete/name/:name", async (req, res) => {
    try {
        const { name } = req.params;
    await deviceModel.findOneAndDelete({ name });
    return res.json({message: "Device Deleted 🔪"})
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
    
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => connectDB()
    .then(() => console.log("Server is Running 🚀"))
    .catch((error) => console.log(error)) 
);
