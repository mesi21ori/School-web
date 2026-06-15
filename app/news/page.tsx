"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Search,
  Menu,
  
  Link as LinkIcon,
  Calendar,
  User,
  MessageCircle,
} from "lucide-react"

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaYoutube,
  FaXTwitter,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6" 
import { SiteHeader } from "@/components/layout/site-header"
import { mockSchool } from "@/lib/mock-school"
import { SiteFooter } from "@/components/layout/site-footer"

const brandColors = {
  primary: "#0B3558",
  secondary: "#F8E9B8",
  accent: "#D9A64A",
}

export default function NewsWebsite() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const topCards = [
    {
      id: 1,
      category: "ENTERTAINMENT",
      title: "Concert for Bangladesh: Photos From the First-Ever Rock 'n' Roll Benefit Show",
      description: "Sem ultricies laoreet laculis cras mattis sollicitudin tristique. Turpis scelerisque vitae phasellus nisi pretium. Urna tempor vehicula nascetur efficitur euismod feugiat elementum mollis iaculis suscipit.",
      image: "/news/concert.jpg",
    },
    {
      id: 2,
      category: "TECHNOLOGY",
      title: "The Intersection of Smartphone Technology and Music Appreciation",
      description: "Sem ultricies laoreet laculis cras mattis sollicitudin tristique. Turpis scelerisque vitae phasellus nisi pretium. Urna tempor vehicula nascetur efficitur euismod feugiat elementum mollis iaculis suscipit.",
      image: "/news/tech.jpg",
    },
    {
      id: 3,
      category: "BUSINESS",
      title: "Empowering Healthcare Industry: How Virtual Reality Drives Business Progress",
      description: "Sem ultricies laoreet laculis cras mattis sollicitudin tristique. Turpis scelerisque vitae phasellus nisi pretium. Urna tempor vehicula nascetur efficitur euismod feugiat elementum mollis iaculis suscipit.",
      image: "/news/business.jpg",
    },
  ]

  const tickerItems = [
    { category: "NEWS", title: "Shortened opening hours during the Easter long weekend" },
    { category: "LIFESTYLE", title: "Readers' picks: 8 great things to do in Iceland" },
    { category: "NATURE", title: "Visitors walk 3 km to Sólheimasandur plane wreck" },
  ]

  const editorPicks = [
    {
      id: 1,
      category: "LIFESTYLE",
      title: "Readers' picks: 8 great things to do in Iceland",
      image: "/news/iceland.jpg",
    },
    {
      id: 2,
      category: "NEWSFEED",
      title: "Shortened opening hours during the Easter long weekend",
      image: "/news/easter.jpg",
    },
    {
      id: 3,
      category: "NATURE",
      title: "Breathtaking video of ice climbing on Vatnajökull glacier",
      image: "/news/glacier.jpg",
    },
    {
      id: 4,
      category: "LOCAL",
      title: "10 interesting places to visit in Iceland for young couples",
      image: "/news/couples.jpg",
    },
  ]

  const fullArticle = {
    id: 4,
    title: "Archaeologists discover a cave believed to have been occupied by a Viking Age outlaw",
    category: "EDITOR'S PICKS",
    author: "SARA MCMAHON",
    date: "MAR 16 2016",
    readTime: "5 min read",
    image: "/ceo.png",
    excerpt: "Cave explorers in the Neshraun lava field on Snæfellsnes peninsula recently discovered a cave with archaeological remains which are believed to be 900 year old. The cave was discovered last winter, but is only now that it's existence has been revealed to the public.",
    content: `
      <p>The lava fields and coastal cliffs in Snæfellsnes National Park are both dramatic and mysterious. A newly discovered cave in Neshraun, to the north of Lónsfjarra beach, where Lónadranger are located, is believed to have been home to a outlaw.</p>
      
      <h2>Not the only mystery hidden in the lava</h2>
      <p>Þór Magnússon, the explorer who found the cave, which has been named Leynir, which translates roughly as Hidden, told the Icelandic National Broadcasting Service, RÚV, that it's discovery proves that many undiscovered mysteries remain hidden in the lava fields of Iceland. "I'm convinced that this is not the only Hidden around here."</p>
      
      <p>The cave was found to contain a small hearth, bones from a horse and other remains, including what archaeologists believe is a bed. Analysis by the Cultural Heritage Agency of Iceland indicates the remains are from the 11th or 12th centuries. Magnús A. Sigurðsson, the Cultural Heritage manager for West Iceland, told RÚV that the cave was most likely occupied by an outlaw, or someone trying to hide.</p>
      
      <h2>Ate and cooked horsemeat</h2>
      <p>Adolf Friðriksson, an archaeologist, told the Icelandic National Broadcasting Service that the discovery was unique and that it was very difficult to explain the remains. Written records seem to be of little if any use, and no similar remains have previously been found. The presence of horse bones only adds to the mystery.</p>
      
      <blockquote>"Actually, if you explore evidence provided by archaeology it seems to have been very unusual for people to consume horse meat, both before and after the adoption of Christianity. The cave dweller certainly kept his consumption of horse meat a secret."</blockquote>
      
      <p>Archaeologists plan to explore the cave this September.</p>
    `,
  }

  const handleReadMore = (card: any) => {
    setSelectedArticle(card)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedArticle(null)
    document.body.style.overflow = "auto"
  }

  return (
    <>
    <SiteHeader school={mockSchool}/>
      <div className="min-h-screen bg-white ">

   
      
      </div>

    
       <SiteFooter school={mockSchool}/>
    </>
  )
}