// 'use client'

import * as LucideIcons from 'lucide-react'

import type { FC, SVGProps } from 'react'

type IconComponent = FC<SVGProps<SVGSVGElement>>
export type IconName = keyof typeof LucideIcons

type LucideIconProps = {
  iconName: IconName
  size?: number
  className?: string
}

export default function LucideIcon({
  iconName,
  size = 160,
  className = 'text-blue-800',
}: LucideIconProps) {
  const IconComponent = (LucideIcons[iconName] as IconComponent | undefined) || LucideIcons.CircleX



  return (
    <IconComponent
      className={className}
      width={size}
      height={size}
      stroke="currentColor"
    />
  )
}
