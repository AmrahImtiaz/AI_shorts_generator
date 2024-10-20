"use client"

import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle'
import SelectDuration from './_components/SelectDuration'
import { Button } from "@/components/ui/button"
import axios from 'axios';

function CreateNew() {

  const [formData,setFormData]=useState([])
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

    if (!formData.duration || !formData.topic || !formData.imageStyle) {
        console.error("Please fill in all fields.");
        return;
    }

    const prompt = `Write a script that generates ${formData.duration} seconds video on topic: ${formData.topic} along with an AI Image in a ${formData.imageStyle} format for each scene and give me the result in JSON format with ImagePrompt and ContentText as fields, no plain text.`;
    console.log(prompt);

    try {
        const response = await axios.post('/api/get-video-script', {
            prompt: prompt
        });
        console.log(response.data);
    } catch (error) {
        console.error("Error fetching video script:", error.response ? error.response.data : error.message);
    }
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
      </div>
  )
}

export default CreateNew