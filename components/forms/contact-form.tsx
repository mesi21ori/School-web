"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { contactFormSchema, ContactFormValues } from "@/lib/validations/contact-schema"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle } from "lucide-react"

interface ContactFormProps {
  primaryColor?: string
}

export function ContactForm({ primaryColor = "#2563eb" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  const gradeOptions = [
    "Kindergarten",
    "1st Grade",
    "2nd Grade",
    "3rd Grade",
    "4th Grade",
    "5th Grade",
    "6th Grade",
    "7th Grade",
    "8th Grade",
    "9th Grade",
    "10th Grade",
    "11th Grade",
    "12th Grade"
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitted && (
        <div className="flex gap-3 items-start p-4 rounded-lg bg-green-50 border border-green-200">
          <CheckCircle className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h3 className="font-semibold text-green-900">Thank you!</h3>
            <p className="text-sm text-green-800">We&apos;ll be in touch soon.</p>
          </div>
        </div>
      )}

      {/* Parent Name */}
      <div>
        <label htmlFor="parentName" className="block text-sm font-medium text-foreground mb-2">
          Parent/Guardian Name
        </label>
        <Input
          id="parentName"
          {...register("parentName")}
          placeholder="John Smith"
          className="w-full"
        />
        {errors.parentName && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.parentName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="john@example.com"
          className="w-full"
        />
        {errors.email && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number
        </label>
        <Input
          id="phone"
          {...register("phone")}
          placeholder="(555) 123-4567"
          className="w-full"
        />
        {errors.phone && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Student Grade */}
      <div>
        <label htmlFor="studentGrade" className="block text-sm font-medium text-foreground mb-2">
          Student Grade
        </label>
        <select
          id="studentGrade"
          {...register("studentGrade")}
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
        >
          <option value="">Select a grade</option>
          {gradeOptions.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
        {errors.studentGrade && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.studentGrade.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message
        </label>
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your interest in Horizon Academy..."
          className="w-full min-h-32 resize-none"
        />
        {errors.message && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold"
        style={{ backgroundColor: primaryColor }}
      >
        Send Message
      </Button>
    </form>
  )
}
