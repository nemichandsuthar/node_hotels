import express from 'express';
const router = express.Router();
import MenuItems from './../models/MenuItems.js';


//post method for menu items

router.post('/',async(req, res)=>{
  console.log('post route hit');
  try{

    const data = req.body
    const newMenu = new MenuItems(data);
    const response = await newMenu.save();
    console.log('data saved');
    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal error occured'});
  }
})

//get method to get menu data

router.get('/', async (req, res)=>{
  try{
    const data = await MenuItems.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal error'});

  }
})

//paramatrised get method on menuitems

router.get('/:tasteType',async (req,res)=>{
    console.log('get route hit on paramatrised');
    try{
       const tasteType = req.params.tasteType;
       if(tasteType=='Salty'|| tasteType=='Sour'||tasteType=='Sweet'){
       const response = await MenuItems.find({taste:tasteType});
       console.log('data fetched');
       res.status(200).json(response);
       }else{
        res.status(404).json({message : 'Invalid taste type'});
       }
       
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal error occured'});
    }
})

//put method on menu

router.put('/:ID',async(req, res)=>{
    console.log('put route hit');
    try{
        const menuID= req.params.ID;
        const menuUpdate= req.body;

        const updatedMenu = await MenuItems.findByIdAndUpdate(menuID, menuUpdate,{
            new:true, //returns the update menudata
            runValidators:true,
        });

        if(!updatedMenu){
        return res.status(404).json({message : 'menu not found'});
        }
        res.status(200).json(updatedMenu);

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal error occured'});
    }
})

//delete method on menu
router.delete('/:ID',async (req, res)=>{
    console.log('delete route hit');
    try{
        const menuID= req.params.ID;
        const menuDeleted= await MenuItems.findByIdAndDelete(menuID);

        if(!menuDeleted){
        return res.status(404).json({message : 'Invalid menu ID'});
        }
        res.json('Menu data deleted successfully');

    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal error occured'});
    }

})
export default router;