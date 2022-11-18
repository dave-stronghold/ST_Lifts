import React from 'react'
import styles from './contact.module.scss'
import { BsWhatsapp } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { useForm } from "react-hook-form";

import axios from "axios";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    console.log(data);



  }



  return (
    <div className={styles.container} id='contact'>
      <div className='title'>Contact Us</div>
      <div className={styles.tagline}>Want to know more about our service?</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={styles.input}  {...register("email", {
          required: true,
          pattern: /[^@\t\r\n]+@[^@ \t\r\n]+\.[^@\t\r\n]+/,
        })} placeholder="Enter your mail ID" />
        
        {errors.email?.type == "required" && (
          <p className="error">*Email is required</p>
        )}
        {errors.email?.type == "pattern" && (
          <p className="error">*Enter a valid email ID</p>
        )}
        <input className={styles.input} {...register("phone",{
          required:true,
          pattern:/(\+91)?(-)?\s*?(91)?\s*?(\d{3})-?\s*?(\d{3})-?\s*?(\d{4})/,
        })} placeholder="Enter your Phone Number" />
        {errors.phone?.type == "required" && (
          <p className="error">*Phone no. is required</p>
        )}
        {errors.phone?.type == "pattern" && (
          <p className="error">*Enter a valid phone number</p>
        )}
        <textarea  {...register("message", { required: true })} className={styles.textarea} placeholder="Enter your message" />
        {errors.message?.type == "required" && (
          <p className="error">*Please enter a message</p>
        )}
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <div className={styles.phone}> <BsWhatsapp /> +91-95694-98494</div>
      <div className={styles.loc}> <GoLocation /> ST Lifts, 21, Marina street, Kovilpatti, Tamil Nadu - 600 018, India.</div>
    </div>
  )
}
