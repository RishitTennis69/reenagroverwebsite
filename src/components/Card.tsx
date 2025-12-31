import React from 'react'

interface CardProps {
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}

export function Card({ className = '', style, children }: CardProps) {
  return (
    <div 
      className={`rounded-lg border border-border bg-card text-card-foreground shadow-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  )
}
