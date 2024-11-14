"use client"

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Poppins } from 'next/font/google';
import { toast } from 'sonner';


const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700", "600", "500", "400", "300", "200"],
  });
  

export const Form = () => {

    const [loading, setLoading] = useState(false)


  const form = useRef();

  const sendEmail = (e:any) => {
    setLoading(true)
    e.preventDefault();

    emailjs
      .sendForm('service_mtiu8kj', 'template_z8ossup', form.current as any, {
        publicKey: 'wdkAlvKT9_7ntIYX1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success("Message sended successfully")
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.success("Error sending message, please try again later")

        },
      );

      setLoading(false)
  };

  return (
    <form ref={form as any} onSubmit={sendEmail} className={`${poppins.className} flex flex-col gap-4`}>
      <div className='flex flex-col gap-1'>
        <label className='text-white'>Name</label>
        <input type="text" name="user_name" className='bg-white p-2 rounded-xl' placeholder='Jhon Doe..'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-white'>Email</label>
        <input type="email" name="user_email" className='bg-white p-2 rounded-xl' placeholder='example@gmail.com'/>
      </div>
      <div className='flex flex-col gap-1'>
        <label className='text-white'>Message</label>
        <textarea name="message" className='bg-white p-2 rounded-xl' placeholder='Message....'/>
      </div>
      <button type="submit" value="Send" className='bg-white p-2 rounded-xl w-full mt-4 text-gray-700 font-semibold hover:opacity-75 transition-all'>
        {loading ? "Sending message" : "Send message"}
      </button>
    </form>
  );
};