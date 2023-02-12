"use client"

import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import TextField from "./TextField";
import * as z from 'zod'  

import {zodResolver} from '@hookform/resolvers/zod'  


const TheSchema = z.object({
  name: z.string().min(20).max(24),
  email : z.string().email()
})


export type TheSchemaTypes = z.infer<typeof TheSchema>;


const Form = () => {
    const {
      handleSubmit,
      register,
      reset,
      formState,
      formState: { errors },
    } = useForm<TheSchemaTypes>({
      resolver: zodResolver(TheSchema),
    });



    const onValid = useCallback(
      (data: unknown) => {
        console.log("valid", data);
      },
      []
    );
    

    useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name:"" , email:"" });
    }    }, [reset, formState]);
    
    
   
return (
  <form
    onSubmit={handleSubmit(onValid)}
    className="w-full gap-5 bg-white shadow-md border p-5 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 "
  >
    {/* header */}
    <h1 className="sm:col-span-2 md:col-span-3 lg:col-span-4 text-center font-bold text-3xl">
      The Form
    </h1>

    {/* name and last name  */}
    <TextField
      type="text"
      id="name"
      error={errors.name?.message as string}
      label="الاسم واللقب"
      inputProps={register("name")}
    />

    {/* name and last name  */}
    <TextField
      type="text"
      id="email"
      error={errors.email?.message as string}
      label="الايميل"
      inputProps={register("email")}
    />

    <section className="flex justify-center items-center sm:col-span-2 md:col-span-3 lg:col-span-4">
      <button className="w-[50%] rounded-lg h-10 bg-stone-700 text-white    text-center font-bold text-xl shadow-md hover:shadow-sm hover:bg-stone-700/90 duration-100">
        اطلب الآن
      </button>
    </section>
  </form>
);
}

export default Form