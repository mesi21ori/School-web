import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"

interface BrandCardProps {
  icon?: ReactNode
  title: string
  description: string
  children?: ReactNode
  accentColor?: string
}

export function BrandCard({
  icon,
  title,
  description,
  children,
  accentColor = "#7c3aed"
}: BrandCardProps) {
  return (
    <Card className="border-2 hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        {icon && (
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center mb-2"
            style={{ backgroundColor: `${accentColor}20` }}
          >
            {icon}
          </div>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}
