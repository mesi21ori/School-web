"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  X,
  Download,
  Maximize2,
  Minimize2,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  BookOpen,
} from "lucide-react"
import { Document, Page, pdfjs } from "react-pdf"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

interface PDFCard {
  id: string
  title: string
  description: string
  image: string
  pdfUrl: string
  category: string
}

// Ozone School Brand Colors
const brandColors = {
  primary: "#0B3558",    // Primary color from mockSchool
  secondary: "#F8E9B8",  // Secondary color from mockSchool
  accent: "#D9A64A",     // Accent color from mockSchool
}

export default function PDFReaderPage() {
  const [selectedPDF, setSelectedPDF] = useState<PDFCard | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [scale, setScale] = useState(1)

  const pdfCards: PDFCard[] = [
    {
      id: "1",
      title: "Ozone School Rules and Regulations!",
      description:
        "This PDF includes the details of rules and regulations for Ozone School.",
      image: "/PDF/image.png",
      pdfUrl: "/PDF/School Rules and Requirements.pdf",
      category: "Rules",
    },
  ]

  const openPDF = (card: PDFCard) => {
    setSelectedPDF(card)
    setIsModalOpen(true)
    setPageNumber(1)
    setScale(1)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setIsFullscreen(false)
    setSelectedPDF(null)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal()
    }

    if (isModalOpen) window.addEventListener("keydown", handleEsc)

    return () => window.removeEventListener("keydown", handleEsc)
  }, [isModalOpen])

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-yellow-50 px-4 py-14 sm:px-6 lg:px-20 mt-10">
        <div className="mx-auto max-w-7xl text-center">
          {/* Decorative element */}
          <div className="mb-4 flex justify-center">
            <div className="h-1 w-20 rounded-full" style={{ backgroundColor: brandColors.accent }} />
          </div>
          
          <h1 
            className="text-4xl font-black tracking-tight sm:text-5xl"
            style={{ color: brandColors.primary }}
          >
            Ozone School Rules and Regulations
          </h1>
          
          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600">
            Learn about our school policies, student expectations, and community guidelines
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {pdfCards.map((card) => (
            <button
              key={card.id}
              onClick={() => openPDF(card)}
              className="group overflow-hidden rounded-[28px] bg-white text-left shadow-sm ring-1 ring-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <span 
                  className="absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold backdrop-blur-sm"
                  style={{ 
                    backgroundColor: brandColors.primary,
                    color: "white"
                  }}
                >
                  {card.category}
                </span>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <span 
                    className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.18em] shadow-xl"
                    style={{ color: brandColors.primary }}
                  >
                    <BookOpen size={16} style={{ color: brandColors.accent }} />
                    Open to Read
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 
                  className="text-xl font-black"
                  style={{ color: brandColors.primary }}
                >
                  {card.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                
                {/* Decorative element */}
                <div 
                  className="mt-4 h-0.5 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: brandColors.accent }}
                />
              </div>
            </button>
          ))}
        </div>
      </main>

      {isModalOpen && selectedPDF && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 p-2 backdrop-blur-sm sm:p-4">
          <div
            className={`flex flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300 ${
              isFullscreen
                ? "h-[100dvh] w-screen rounded-none"
                : "h-[96dvh] w-full max-w-6xl rounded-[18px] sm:h-[92dvh] sm:rounded-[24px]"
            }`}
          >
            {/* Top Header */}
            <div 
              className="flex shrink-0 items-center justify-between gap-3 border-b px-3 py-2 sm:px-4 sm:py-3"
              style={{ backgroundColor: `${brandColors.primary}08` }}
            >
              <div className="min-w-0 flex-1">
                <h3 
                  className="truncate text-xs font-black sm:text-base"
                  style={{ color: brandColors.primary }}
                >
                  {selectedPDF.title}
                </h3>
                <p className="truncate text-[10px] text-slate-500 sm:text-xs">
                  {selectedPDF.category}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1 sm:gap-2">
                <a
                  href={selectedPDF.pdfUrl}
                  download
                  className="rounded-lg p-2 transition hover:bg-slate-200"
                  style={{ color: brandColors.primary }}
                  title="Download"
                >
                  <Download size={18} />
                </a>

                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="rounded-lg p-2 transition hover:bg-slate-200"
                  style={{ color: brandColors.primary }}
                  title="Fullscreen"
                >
                  {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>

                <button
                  onClick={closeModal}
                  className="rounded-lg p-2 transition hover:bg-red-100 hover:text-red-600"
                  style={{ color: brandColors.primary }}
                  title="Close"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* PDF Controls */}
            <div className="flex shrink-0 items-center justify-between gap-2 border-b px-3 py-2 sm:px-4 sm:py-3">
              <button
                disabled={pageNumber <= 1}
                onClick={() => setPageNumber((p) => p - 1)}
                className="rounded-lg p-2 transition disabled:opacity-40"
                style={{ 
                  backgroundColor: `${brandColors.primary}10`,
                  color: brandColors.primary
                }}
              >
                <ChevronLeft size={17} />
              </button>

              <p 
                className="whitespace-nowrap text-[11px] font-bold sm:text-xs"
                style={{ color: brandColors.primary }}
              >
                Page {pageNumber} of {numPages || "..."}
              </p>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setScale((s) => Math.max(0.55, s - 0.1))}
                  className="rounded-lg p-2 transition"
                  style={{ 
                    backgroundColor: `${brandColors.primary}10`,
                    color: brandColors.primary
                  }}
                >
                  <ZoomOut size={17} />
                </button>

                <button
                  onClick={() => setScale((s) => Math.min(1.8, s + 0.1))}
                  className="rounded-lg p-2 transition"
                  style={{ 
                    backgroundColor: `${brandColors.primary}10`,
                    color: brandColors.primary
                  }}
                >
                  <ZoomIn size={17} />
                </button>
              </div>

              <button
                disabled={pageNumber >= numPages}
                onClick={() => setPageNumber((p) => p + 1)}
                className="rounded-lg p-2 transition disabled:opacity-40"
                style={{ 
                  backgroundColor: `${brandColors.primary}10`,
                  color: brandColors.primary
                }}
              >
                <ChevronRight size={17} />
              </button>
            </div>

            {/* PDF Body */}
            <div className="min-h-0 flex-1 overflow-auto bg-slate-100 p-2 sm:p-4">
              <div className="flex min-w-max justify-center">
                <Document
                  file={selectedPDF.pdfUrl}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  loading={
                    <div className="mt-20 flex flex-col items-center">
                      <div 
                        className="mb-4 h-12 w-12 animate-spin rounded-full border-b-2"
                        style={{ borderColor: brandColors.accent }}
                      />
                      <p className="text-sm font-bold text-slate-500">
                        Loading PDF...
                      </p>
                    </div>
                  }
                  error={
                    <div className="mt-20 text-center">
                      <p className="text-sm font-bold text-red-500">
                        Failed to load PDF. Please try again.
                      </p>
                    </div>
                  }
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={scale}
                    className="overflow-hidden rounded-xl shadow-xl"
                  />
                </Document>
              </div>
            </div>
            
            {/* Footer with brand color */}
            <div 
              className="shrink-0 border-t px-4 py-2 text-center text-xs text-slate-500"
              style={{ backgroundColor: `${brandColors.secondary}30` }}
            >
              <span style={{ color: brandColors.primary }}>
                Ozone School - Official Rules and Regulations Document
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}