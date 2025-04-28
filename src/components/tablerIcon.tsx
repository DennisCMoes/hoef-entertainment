import * as TablerIcons from '@tabler/icons-react'

import type { FC, SVGProps } from 'react'

type IconComponent = FC<SVGProps<SVGSVGElement>>
export type IconName = keyof typeof TablerIcons

type TablerIconProps = {
  iconName: IconName
  size?: number
  className?: string
}

export default function TablerIcon({
  iconName,
  size = 160,
  className = 'text-blue-800',
}: TablerIconProps) {
  const IconComponent =
    (TablerIcons[iconName] as IconComponent | undefined) ||
    TablerIcons.IconError404

  return (
    <IconComponent
      className={className}
      width={size}
      height={size}
      stroke="currentColor"
    />
  )
}
