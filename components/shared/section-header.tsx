interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export function SectionHeader({ title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className="text-4xl font-bold text-foreground mb-4">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>}
    </div>
  )
}
