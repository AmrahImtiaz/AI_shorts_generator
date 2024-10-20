"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from "@/components/ui/button"
import CustomLoading from './_components/CustomLoading'
import axios from 'axios';

function CreateNew() {

  const [formData,setFormData]=useState([])
  const [loading,setLoading]=useState(false);
  const [videoScript,setVideoScript]=useState();

  const onHandleInputChange=(fieldName,fieldValue)=>{
    console.log(fieldName,fieldValue)

  setFormData(prev=>({
  ...prev,
  [fieldName]:fieldValue
  }))
  }

  const onCreateClickHandler=()=>{
    GetVideoScript();
   }
  
  const GetVideoScript = async () => {
    setLoading(true);
  
    const prompt = `Write a script to generate ${formData.duration}`;
    console.log(prompt);
  
    const result = await axios.post('/api/get-video-script', {
      prompt: prompt
    }).then(resp => {
      console.log(resp.data.result);
      setVideoScript(resp.data.result);
      
    });
    setLoading(false);
  };

  return (
    <div className='md:px-20' >
      <h2 className='p-9 font-bold text-4xl text-primary text-center ' >CreateNew</h2>

      <div className='mt-10 shadow-md p-10' >
        {/* Select Topic */}
        <SelectTopic  onUserSelect={onHandleInputChange}/>
        {/* Select Style */}
        <SelectStyle onUserSelect={onHandleInputChange}/>
        {/* Select Duration */}
        <SelectDuration onUserSelect={onHandleInputChange}/>
        {/* Create Button */}
        <Button className="mt-10 w-full" onClick={onCreateClickHandler} >Create Short Video</Button>
      </div>
      <CustomLoading loading={loading} />
      </div>
  )
}

export default CreateNew;