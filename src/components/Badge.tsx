import React from 'react'

interface BadgeProps {
  variant?: 'secondary' | 'outline' | 'default'
  className?: string
  children: React.ReactNode
}

export function Badge({ variant = 'default', className = '', children }: BadgeProps) {
  let variantStyles = ''
  
  switch (variant) {
    case 'secondary':
      variantStyles = 'bg-secondary text-secondary-foreground'
      break
    case 'outline':
      variantStyles = 'border border-primary text-foreground'
      break
    default:
      variantStyles = 'bg-primary text-primary-foreground'
  }

  return (
    <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${variantStyles} ${className}`}>
      {children}
    </div>
  )
}
