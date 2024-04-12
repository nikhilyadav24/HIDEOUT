const mongoose=require('mongoose');
const express=require('express');   
const cors=require("cors");
const app=express();

mongoose.connect('mongodb://localhost:27017/hideout',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const place=mongoose.model('places',{
    user_obj_id: mongoose.Schema.Types.ObjectId,
    place_name: String,
    fileid: mongoose.Schema.Types.ObjectId,
    story: String,
    likes: Number,
    type: String,
    filepath:String
});
const file_storage=mongoose.model('file_storage',{
    filepath: String,
    filename: String,
});
app.use('/images',express.static("C:/Users/shubh kamra/nikhil/HIDEOUT/images"));
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    credentials: true, // Allow including cookies in requests (if applicable)
  }));
app.get('/api/places/top-rated',async(req,res)=>{
    try{
        const topratedplaces=await place.aggregate([{
            $lookup:{
                from: 'file_storage',
                localField: 'fileid',
                foreignField: '_id',
                as: 'file',
            },
        },{
                $project:{
                    user_obj_id: 1,
                    place_name: 1,
                    fileid: 1,
                    story: 1,
                    likes: 1,
                    type: 1,
                    filepath: { $arrayElemAt: ['$file.filepath', 0] },

                },
            },{
                $sort:{likes:-1},
            },{
                $limit:6,
            }
        ]);
        console.log(topratedplaces);
        res.json(topratedplaces);

    }catch(err){
        res.status(404).json({
            status:"fail",
            message:err,
        });
    }

});

app.listen(3001,()=>{
    console.log("port is running...");
});

