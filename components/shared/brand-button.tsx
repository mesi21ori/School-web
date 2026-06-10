import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface BrandButtonProps {
  children: ReactNode
  variant?: "primary" | "secondary"
  onClick?: () => void
  className?: string
  primaryColor?: string
}

export function BrandButton({
  children,
  variant = "primary",
  onClick,
  className = "",
  primaryColor = "#2563eb"
}: BrandButtonProps) {
  const isSecondary = variant === "secondary"

  return (
    <Button
      onClick={onClick}
      className={className}
      style={{
        backgroundColor: isSecondary ? "transparent" : primaryColor,
        color: isSecondary ? primaryColor : "white",
        borderColor: primaryColor,
        borderWidth: isSecondary ? "2px" : "0"
      }}
    >
      {children}
    </Button>
  )
}
