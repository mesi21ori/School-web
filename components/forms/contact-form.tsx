"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validations/contact-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, Send } from "lucide-react";

interface ContactFormProps {
  primaryColor?: string;
  contact?: {
    phone?: string;
    email?: string;
    hours?: string;
  };
}

export function ContactForm({
  primaryColor = "#2563eb",
  contact,
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: yupResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitted && (
        <div className="flex gap-3 items-start p-4 rounded-lg bg-green-50 border border-green-200">
          <CheckCircle
            className="text-green-600 flex-shrink-0 mt-0.5"
            size={20}
          />
          <div>
            <h3 className="font-semibold text-green-900">Thank you!</h3>
            <p className="text-sm text-green-800">
              We'll be in touch soon.
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="parentName"
            className="block text-sm font-medium text-foreground mb-2"
          >
           Name <span className="text-red-500">*</span>
          </label>

          <Input
            id="parentName"
            {...register("parentName")}
            placeholder="Your full name"
            className="w-full"
          />

          {errors.parentName && (
            <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.parentName.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground mb-2"
          >
            Phone Number <span className="text-red-500">*</span>
          </label>

          <Input
            id="phone"
            {...register("phone")}
            placeholder="09...."
            className="w-full"
          />

          {errors.phone && (
            <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
              <AlertCircle size={16} />
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Your Message here
        </label>

        <Textarea
          id="message"
          {...register("message")}
          placeholder="Tell us about your interest..."
          className="w-full min-h-28 resize-none"
        />

        {errors.message && (
          <p className="text-sm text-red-600 mt-1 flex gap-1 items-center">
            <AlertCircle size={16} />
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full h-12 text-base font-semibold gap-2 transition-all hover:-translate-y-0.5"
        style={{ backgroundColor: primaryColor }}
      >
        Send Message <Send size={16} />
      </Button>

      <div className="pt-3 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span>📞</span>
            <span>{contact?.phone || "+251 XXX XXX XXX"}</span>
          </div>

          <div className="hidden sm:block">•</div>

          <div className="flex items-center gap-1.5">
            <span>✉️</span>
            <span>{contact?.email || "info@school.com"}</span>
          </div>

          <div className="hidden sm:block">•</div>

          <div className="flex items-center gap-1.5">
            <span>🕒</span>
            <span>{contact?.hours || "Mon-Fri 9AM-5PM"}</span>
          </div>
        </div>
      </div>
    </form>
  );
}