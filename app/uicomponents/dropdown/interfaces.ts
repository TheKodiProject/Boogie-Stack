import { ReactNode } from 'react'

export interface IDropdownProps {
  label: string
  icon?: IDropDownIcon
  items: IDropdownItem[]
}
export interface IDropdownItem {
  children: ReactNode
  closeMenu?: () => Promise<void>
  onSelect: () => void
}
export interface IDropDownIcon {
  children: ReactNode
  position: 'left' | 'right' | 'center'
}
