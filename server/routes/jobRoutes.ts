import { Router } from "express";
import Appliations from "../database/models/jobApply.model";
import filterForApplicationView from "../helpers/filters";

const router = Router()

router.get('/',async (req,res)=>{
    try{
        const {body}  = req
        const filterQuery = await filterForApplicationView(body)

        const allApplications = await Appliations.find(filterQuery)
        res.status(201).json(allApplications)
    }catch (error){
        res.status(500)
    }
})



router.post('/',async(req,res)=>{
    try{
        const {body} = req
        console.log(body)
    
        const newApplication = await Appliations.create(body)
        res.status(201).json(newApplication)
    }catch(error : any){
        res.status(500).json({ error: error.message });
    }
})

export default router