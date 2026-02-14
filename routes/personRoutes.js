import express from 'express'
const router = express.Router();
import Person from './../models/Person.js';

//post method

router.post('/', async(req, res)=>{

 try{

  const data =req.body //body parser stores the data in req.body, we are assuming this
  const newPerson =new Person(data); //create a new person document using the mongoose model
  const response = await newPerson.save();
  console.log('data saved');
  res.status(200).json(response);

  } catch(err){
  console.log(err);
  res.status(500).json({error:'interal error occured'});
  }
})

//get method to get data

router.get('/',async(req, res)=>{
  try{
    const data = await Person.find();
    console.log('data fetched');
    res.status(200).json(data);

  }catch(err){
    console.log(err);
    res.status(500).json({error : 'Internal error occured'});

  }
})

//paramatrised call for get

router.get('/:workType',async(req,res)=>{
  console.log('get route hit');

try{
  const workType = req.params.workType;
  if(workType=='Chef'||workType=='waiter'||workType=='manager'){
  const response = await Person.find({work:workType});
  console.log('data fetched');
  res.status(200).json(response);
  }else{
    res.status(404).json({error :'Invalid worktype'});
  }

  }catch(err){
    console.log(err);
    res.status(500).json({error:'Internal error occured'});
  }
})

//put method for updating the data
router.put('/:ID',async(req, res)=>{
  console.log('put route hit');
  try{
    const personID= req.params.ID;
    const personData = req.body;

    const response = await Person.findByIdAndUpdate(personID, personData,{
      new:true,
      runValidators: true,
    });

    if(!response){
      return res.status(404).json({message : 'Person not found'})
    }

    res.status(200).json(response);

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal error occured'});
  }
})

//delete method to delete the data
router.delete('/:ID', async (req, res)=>{
  console.log('delete route hit');
  try{
    const personID= req.params.ID;
    const deletedPerson = await Person.findByIdAndDelete(personID);

    if(!deletedPerson){
    return res.status(404).json({message : 'person not found'});
    }
    res.json({message : 'person deleted successfully'});

  }catch(err){
    console.log(err);
    res.status(500).json({error: 'Internal error occured'});
  }
})

export default router;