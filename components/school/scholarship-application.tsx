"use client"

import { useState } from "react"
import {
  ChevronRight,
  User,
  Mail,
  School,
  Users,
  FileText,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const brandColors = {
  primary: "#0B3558",
  secondary: "#F8E9B8",
  accent: "#D9A64A",
}

export default function ScholarshipApplication() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",

    email: "",
    phone: "",
    address: "",
    city: "",

    currentSchool: "",
    currentGrade: "",
    applyingGrade: "",
    academicYear: "2025-2026",
    averageResult: "",

    fatherName: "",
    fatherOccupation: "",
    fatherPhone: "",
    motherName: "",
    motherOccupation: "",
    motherPhone: "",
    familyMonthlyIncome: "",
    numberOfDependents: "",

    scholarshipType: "",
    reasonForScholarship: "",
    academicAchievements: "",
    extracurricularActivities: "",

    studentPhoto: null as File | null,
    reportCard: null as File | null,
    recommendationLetter: null as File | null,
    incomeEvidence: null as File | null,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const grades = [
    "KG-1",
    "KG-2",
    "Grade 1",
    "Grade 2",
    "Grade 3",
    "Grade 4",
    "Grade 5",
    "Grade 6",
    "Grade 7",
    "Grade 8",
    "Grade 9",
    "Grade 10",
    "Grade 11",
    "Grade 12",
  ]

  const scholarshipTypes = [
    "Full Scholarship",
    "Partial Scholarship",
    "Academic Merit Scholarship",
    "Financial Need Scholarship",
    "Talent-Based Scholarship",
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const file = e.target.files?.[0] || null

    setFormData((prev) => ({
      ...prev,
      [fieldName]: file,
    }))
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
      if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
      if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of birth is required"
      if (!formData.gender) newErrors.gender = "Gender is required"
      if (!formData.nationality.trim()) newErrors.nationality = "Nationality is required"
    }

    if (currentStep === 2) {
      if (!formData.email.trim()) newErrors.email = "Email is required"
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
      if (!formData.address.trim()) newErrors.address = "Address is required"
    }

    if (currentStep === 3) {
      if (!formData.currentSchool.trim()) newErrors.currentSchool = "Current school is required"
      if (!formData.currentGrade) newErrors.currentGrade = "Current grade is required"
      if (!formData.applyingGrade) newErrors.applyingGrade = "Applying grade is required"
      if (!formData.averageResult.trim()) newErrors.averageResult = "Average result is required"
    }

    if (currentStep === 4) {
      if (!formData.fatherName.trim() && !formData.motherName.trim()) {
        newErrors.parentInfo = "At least one parent or guardian name is required"
      }

      if (!formData.familyMonthlyIncome.trim()) {
        newErrors.familyMonthlyIncome = "Family monthly income is required"
      }
    }

    if (currentStep === 5) {
      if (!formData.scholarshipType) {
        newErrors.scholarshipType = "Scholarship type is required"
      }

      if (!formData.reasonForScholarship.trim()) {
        newErrors.reasonForScholarship = "Reason for scholarship is required"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (!validateStep()) return

    setCurrentStep((prev) => Math.min(prev + 1, 5))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const prevStep = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (currentStep !== 5) return
    if (!validateStep()) return

    setIsSubmitting(true)

    const submitData = new FormData()

    Object.entries(formData).forEach(([key, value]) => {
      if (value instanceof File) {
        submitData.append(key, value)
      } else if (value !== null) {
        submitData.append(key, String(value))
      }
    })

    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 px-4 py-20 sm:px-6 lg:px-20 mt-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <div className="rounded-full bg-green-100 p-4">
              <CheckCircle size={64} style={{ color: brandColors.accent }} />
            </div>
          </div>

          <h1 className="mb-4 text-4xl font-black" style={{ color: brandColors.primary }}>
            Scholarship Application Submitted!
          </h1>

          <p className="mb-6 text-lg text-slate-600">
            Thank you for applying for the scholarship. Our scholarship committee will review your application carefully.
          </p>

          <div className="rounded-2xl bg-white p-6 shadow-lg" style={{ borderLeft: `4px solid ${brandColors.accent}` }}>
            <h3 className="mb-2 font-bold" style={{ color: brandColors.primary }}>
              What's Next?
            </h3>

            <ul className="space-y-2 text-left text-slate-600">
              <li className="flex items-center gap-2">
                <ChevronRight size={16} style={{ color: brandColors.accent }} />
                You will receive a confirmation message after review.
              </li>

              <li className="flex items-center gap-2">
                <ChevronRight size={16} style={{ color: brandColors.accent }} />
                Shortlisted students may be contacted for an interview or assessment.
              </li>

              <li className="flex items-center gap-2">
                <ChevronRight size={16} style={{ color: brandColors.accent }} />
                Final scholarship decisions will be communicated by the school.
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition hover:scale-105"
            style={{ backgroundColor: brandColors.primary, color: "white" }}
          >
            <ArrowRight size={18} />
            Submit Another Application
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 px-4 py-12 sm:px-6 lg:px-8 mt-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { step: 1, label: "Student Info", icon: User },
              { step: 2, label: "Contact Info", icon: Mail },
              { step: 3, label: "Academic Info", icon: School },
              { step: 4, label: "Family Info", icon: Users },
              { step: 5, label: "Scholarship Info", icon: FileText },
            ].map((item) => (
              <div key={item.step} className="z-10 flex flex-col items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all ${
                    currentStep >= item.step ? "text-white" : "bg-gray-200 text-gray-500"
                  }`}
                  style={{
                    backgroundColor: currentStep >= item.step ? brandColors.accent : undefined,
                  }}
                >
                  <item.icon size={18} />
                </div>

                <span className="mt-2 hidden text-xs font-medium sm:block" style={{ color: brandColors.primary }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div className="relative mt-4">
            <div className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" />
            <div
              className="absolute left-0 top-1/2 h-0.5 -translate-y-1/2 transition-all duration-500"
              style={{
                width: `${((currentStep - 1) / 4) * 100}%`,
                backgroundColor: brandColors.accent,
              }}
            />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") e.preventDefault()
          }}
          className="rounded-3xl bg-white p-6 shadow-xl sm:p-8"
        >
          {currentStep === 1 && (
            <div className="space-y-6">
              <SectionTitle title="Student Information" subtitle="Tell us about the scholarship applicant" />

              <div className="grid gap-6 sm:grid-cols-2">
                <InputField label="First Name *" name="firstName" value={formData.firstName} onChange={handleInputChange} error={errors.firstName} />
                <InputField label="Last Name *" name="lastName" value={formData.lastName} onChange={handleInputChange} error={errors.lastName} />
                <InputField label="Date of Birth *" name="dateOfBirth" type="date" value={formData.dateOfBirth} onChange={handleInputChange} error={errors.dateOfBirth} />
                <SelectField label="Gender *" name="gender" value={formData.gender} onChange={handleInputChange} error={errors.gender} options={["Male", "Female"]} />
                <InputField label="Nationality *" name="nationality" value={formData.nationality} onChange={handleInputChange} error={errors.nationality} placeholder="e.g., Ethiopian" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <SectionTitle title="Contact Information" subtitle="How can we reach the applicant or guardian?" />

              <div className="grid gap-6 sm:grid-cols-2">
                <InputField label="Email Address *" name="email" type="email" value={formData.email} onChange={handleInputChange} error={errors.email} placeholder="student@example.com" />
                <InputField label="Phone Number *" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} error={errors.phone} placeholder="+251 9XX XXX XXX" />

                <div className="sm:col-span-2">
                  <TextAreaField label="Home Address *" name="address" value={formData.address} onChange={handleInputChange} error={errors.address} placeholder="Full home address" />
                </div>

                <InputField label="City" name="city" value={formData.city} onChange={handleInputChange} placeholder="Addis Ababa" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <SectionTitle title="Academic Information" subtitle="Tell us about the student's academic background" />

              <div className="grid gap-6 sm:grid-cols-2">
                <InputField label="Current School *" name="currentSchool" value={formData.currentSchool} onChange={handleInputChange} error={errors.currentSchool} placeholder="Name of current school" />
                <SelectField label="Current Grade *" name="currentGrade" value={formData.currentGrade} onChange={handleInputChange} error={errors.currentGrade} options={grades} />
                <SelectField label="Grade Applying For *" name="applyingGrade" value={formData.applyingGrade} onChange={handleInputChange} error={errors.applyingGrade} options={grades} />
                <SelectField label="Academic Year" name="academicYear" value={formData.academicYear} onChange={handleInputChange} options={["2024-2025", "2025-2026", "2026-2027"]} />
                <InputField label="Average Result / GPA *" name="averageResult" value={formData.averageResult} onChange={handleInputChange} error={errors.averageResult} placeholder="e.g., 90%, 3.8 GPA" />
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-6">
              <SectionTitle title="Family and Financial Information" subtitle="This helps us understand financial need" />

              <div>
                <h3 className="mb-3 font-semibold" style={{ color: brandColors.primary }}>
                  Father's Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputSimple name="fatherName" value={formData.fatherName} onChange={handleInputChange} placeholder="Full Name" />
                  <InputSimple name="fatherOccupation" value={formData.fatherOccupation} onChange={handleInputChange} placeholder="Occupation" />
                  <InputSimple name="fatherPhone" type="tel" value={formData.fatherPhone} onChange={handleInputChange} placeholder="Phone Number" />
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-semibold" style={{ color: brandColors.primary }}>
                  Mother's Information
                </h3>

                <div className="grid gap-4 sm:grid-cols-2">
                  <InputSimple name="motherName" value={formData.motherName} onChange={handleInputChange} placeholder="Full Name" />
                  <InputSimple name="motherOccupation" value={formData.motherOccupation} onChange={handleInputChange} placeholder="Occupation" />
                  <InputSimple name="motherPhone" type="tel" value={formData.motherPhone} onChange={handleInputChange} placeholder="Phone Number" />
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <InputField label="Family Monthly Income *" name="familyMonthlyIncome" value={formData.familyMonthlyIncome} onChange={handleInputChange} error={errors.familyMonthlyIncome} placeholder="e.g., 10,000 ETB" />
                <InputField label="Number of Dependents" name="numberOfDependents" type="number" value={formData.numberOfDependents} onChange={handleInputChange} placeholder="e.g., 4" />
              </div>

              {errors.parentInfo && <p className="text-xs text-red-500">{errors.parentInfo}</p>}
            </div>
          )}

          {currentStep === 5 && (
            <div className="space-y-6">
              <SectionTitle title="Scholarship Information" subtitle="Tell us why the student should be considered" />

              <SelectField label="Scholarship Type *" name="scholarshipType" value={formData.scholarshipType} onChange={handleInputChange} error={errors.scholarshipType} options={scholarshipTypes} />

              <TextAreaField label="Reason for Scholarship *" name="reasonForScholarship" value={formData.reasonForScholarship} onChange={handleInputChange} error={errors.reasonForScholarship} placeholder="Explain why the student needs or deserves this scholarship" rows={4} />

              <TextAreaField label="Academic Achievements" name="academicAchievements" value={formData.academicAchievements} onChange={handleInputChange} placeholder="Mention awards, high grades, certificates, or special achievements" rows={3} />

              <TextAreaField label="Extracurricular Activities" name="extracurricularActivities" value={formData.extracurricularActivities} onChange={handleInputChange} placeholder="Sports, clubs, leadership, volunteering, arts, technology, etc." rows={3} />

              <div className="rounded-xl border-2 border-dashed p-6" style={{ borderColor: `${brandColors.accent}40` }}>
                <p className="mb-4 text-sm font-semibold" style={{ color: brandColors.primary }}>
                  Scholarship Supporting Documents
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FileUploadField label="Student Photo" fieldName="studentPhoto" file={formData.studentPhoto} onChange={handleFileChange} />
                  <FileUploadField label="Latest Report Card" fieldName="reportCard" file={formData.reportCard} onChange={handleFileChange} />
                  <FileUploadField label="Recommendation Letter" fieldName="recommendationLetter" file={formData.recommendationLetter} onChange={handleFileChange} />
                  <FileUploadField label="Family Income Evidence" fieldName="incomeEvidence" file={formData.incomeEvidence} onChange={handleFileChange} />
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Accepted files: PDF, JPG, JPEG, PNG.
                </p>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between border-t pt-6">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-xl px-6 py-3 font-semibold transition"
                style={{ backgroundColor: "#e5e7eb", color: "#4b5563" }}
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="ml-auto rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: brandColors.accent }}
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="ml-auto flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                style={{ backgroundColor: brandColors.primary }}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Submitting...
                  </>
                ) : (
                  "Submit Scholarship Application"
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

function SectionTitle({ title, subtitle }: any) {
  return (
    <div className="border-b pb-4">
      <h2 className="text-2xl font-bold" style={{ color: brandColors.primary }}>
        {title}
      </h2>
      <p className="text-sm text-slate-500">{subtitle}</p>
    </div>
  )
}

function InputField({ label, name, value, onChange, error, type = "text", placeholder = "" }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" style={{ color: brandColors.primary }}>
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function InputSimple({ name, value, onChange, type = "text", placeholder = "" }: any) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
    />
  )
}

function TextAreaField({ label, name, value, onChange, error, placeholder = "", rows = 3 }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" style={{ color: brandColors.primary }}>
        {label}
      </label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
      />

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function SelectField({ label, name, value, onChange, error, options }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" style={{ color: brandColors.primary }}>
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2"
      >
        <option value="">Select an option</option>

        {options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
}

function FileUploadField({ label, fieldName, file, onChange }: any) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold" style={{ color: brandColors.primary }}>
        {label}
      </label>

      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        onChange={(e) => onChange(e, fieldName)}
        className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm"
      />

      {file && (
        <p className="mt-1 text-xs text-green-600">
          Selected: {file.name}
        </p>
      )}
    </div>
  )
}