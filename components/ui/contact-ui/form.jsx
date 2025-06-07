"use client";

import { useForm } from "react-hook-form";
import { useRef } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const fileInputRef = useRef(null);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("fullName", data.fullName);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("message", data.message);

    if (data.file[0]) {
      formData.append("file", data.file[0]);
    }

    try {
      // Replace with your API route
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset();
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 3xl:py-0 3xl:my-0 3xl:mx-7 3xl:mt-0 3xl:items-center 3xl:max-h-[660px]"> 

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl bg-zinc-900/50 border-2 border-white/20 overflow-hidden py-4  rounded-2xl shadow-lg p-4 sm:p-6 space-y-4 backdrop-blur-md"
      >
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-transparent 
            bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400
            bg-clip-text"
        >
          Contact Us
        </h2>

        {/* Full Name */}
        <div>
          <label
            htmlFor="fullName"
            className="text-sm sm:text-md font-bold text-gray-400"
          >
            Full Name *
          </label>
          <input
            id="fullName"
            type="text"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 2,
                message: "Full name must be at least 2 characters",
              },
              maxLength: {
                value: 50,
                message: "Full name must not exceed 50 characters",
              },
            })}
            className="mt-1 block w-full text-amber-100  px-3 py-2 text-md font-bold sm:text-md border border-gray-300  rounded-2xl  focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
          />
          {errors.fullName && (
            <p className="mt-1 text-xs sm:text-sm text-red-400">
              {errors.fullName.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="text-sm sm:text-md font-bold text-gray-400"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full text-amber-100 font-bold px-3 py-2 text-sm sm:text-md border border-gray-300 rounded-2xl  focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
          />
          {errors.email && (
            <p className="mt-1 text-xs sm:text-sm text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="text-sm sm:text-md font-bold text-gray-400"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            {...register("phone", {
              pattern: {
                value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/,
                message: "Invalid phone number",
              },
            })}
            className="mt-1 block w-full text-amber-100 font-bold px-3 py-2 text-sm sm:text-md border border-gray-300 rounded-2xl focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
          />
          {errors.phone && (
            <p className="mt-1 text-xs sm:text-sm text-red-400">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="text-sm sm:text-md font-bold text-gray-400"
          >
            Message *
          </label>
          <textarea
            id="message"
            rows={7}
            {...register("message", { required: "Message is required" })}
            className="mt-1 block w-full text-amber-100 font-bold px-3 py-2 text-sm sm:text-md border  border-gray-300 rounded-2xl focus:outline-none focus:ring-indigo-400 focus:border-indigo-400"
          />
          {errors.message && (
            <p className="mt-1 text-xs sm:text-sm text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* File Upload */}
        <div>
          <label
            htmlFor="file"
            className="text-sm sm:text-md font-bold text-gray-400"
          >
            File Upload
          </label>
          <input
            id="file"
            type="file"
            ref={fileInputRef}
            {...register("file")}
            className="mt-3 w-full  text-xs sm:text-sm md:text-md text-gray-400 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-md file:font-bold file:bg-indigo-50 file:text-indigo-400 hover:file:bg-indigo-100"
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-2xl shadow-sm text-sm sm:text-md font-bold text-white bg-indigo-400 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
