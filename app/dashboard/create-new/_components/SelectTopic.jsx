"use client";

import { useState } from 'react';
import React from 'react';
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

function SelectTopic({ onUserSelect }) {
    const options = ['Custom Prompt', 'Random Ai Story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational'];
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <h2 className='font-bold text-2xl text-primary'>Content</h2>
            <p className='text-gray-500'>What is the topic of your video?</p>
            <Select onValueChange={(value) => {
                setSelectedOption(value);
                if (value !== 'Custom Prompt') {
                    onUserSelect('topic', value);
                }
            }}>
                <SelectTrigger className="w-full mt-2 p-6 text-lg" aria-label="Select content type">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {options.map((item, index) => (
                        <SelectItem key={index} value={item}>{item}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
            {selectedOption === 'Custom Prompt' && (
                <Textarea
                    className="mt-3"
                    onChange={(e) => onUserSelect('topic', e.target.value)}
                    placeholder="Write prompt on which you want to generate video"
                />
            )}
        </div>
    );
}

export default SelectTopic;
