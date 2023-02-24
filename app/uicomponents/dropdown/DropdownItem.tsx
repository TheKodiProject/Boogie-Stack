import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { IDropdownItem } from './interfaces'
import { motion, useAnimationControls } from 'framer-motion'

export default function BoogieDropdownItem(props: IDropdownItem) {
  const { children, onSelect, closeMenu } = props
  let controls = useAnimationControls()

  const sleep = (s: number) =>
    new Promise((resolve) => setTimeout(resolve, s * 1000))
  return (
    <DropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault()
        await controls.start({
          backgroundColor: '#fff',
          color: '#000',
          transition: { duration: 0.04 },
        })
        await controls.start({
          backgroundColor: '#38bdf8',
          color: '#fff',
          transition: { duration: 0.04 },
        })
        await sleep(0.075)
        if (closeMenu) await closeMenu()
        onSelect()
      }}
      className="w-40 select-none rounded px-2 py-1.5 text-gray-700 data-[highlighted]:bg-sky-400 data-[highlighted]:text-white data-[highlighted]:focus:outline-none"
      asChild
    >
      <motion.div animate={controls}>{children}</motion.div>
    </DropdownMenu.Item>
  )
}
