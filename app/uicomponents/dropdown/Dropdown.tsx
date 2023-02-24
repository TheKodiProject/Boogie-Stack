import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

import { useEffect, useState } from 'react'
import BoogieDropdownItem from './DropdownItem'
import { IDropdownProps } from './interfaces'

export default function BoogieDropdown(props: IDropdownProps) {
  const { label, items, icon } = props
  let [open, setOpen] = useState(false)
  let controls = useAnimationControls()

  useEffect(() => {
    // controls.start can accept a variant string or an object
    if (open) controls.start('open')
  }, [controls, open])

  async function closeMenu() {
    await controls.start('closed')
    setOpen(false)
  }

  function renderTriggerFromProps() {
    const iconAlignment =
      icon?.position === 'left'
        ? 'start'
        : icon?.position === 'right'
        ? 'end'
        : 'center'
    if (icon) {
      return (
        <div className={`flex items-center ${iconAlignment}`}>
          <>
            {icon}
            <span className="ml-2">{label}</span>
          </>
        </div>
      )
    }
    return label
  }

  return (
    <div className="mx-auto overflow-hidden rounded-md border border-gray-300 bg-white">
      <DropdownMenu.Root open={open} onOpenChange={setOpen}>
        <DropdownMenu.Trigger className="cursor-default select-none rounded px-4 text-2xl hover:bg-gray-200/50 focus-visible:outline-none data-[state=open]:bg-gray-200/75">
          {renderTriggerFromProps()}
        </DropdownMenu.Trigger>

        {/* use AnimatePresence to allow the dropdown to animate out */}
        <AnimatePresence>
          {open && (
            <DropdownMenu.Portal forceMount>
              <DropdownMenu.Content
                align="start"
                className="mt-1 overflow-hidden rounded bg-white/75 p-2 text-left shadow backdrop-blur"
                asChild // will forward all the props of this component to the child
              >
                <motion.div
                  initial="closed"
                  animate={controls}
                  exit="closed"
                  variants={{
                    open: {
                      opacity: 1,
                      transition: { ease: 'easeOut', duration: 0.1 },
                    },
                    closed: {
                      opacity: 0,
                      transition: { ease: 'easeIn', duration: 0.2 },
                    },
                  }}
                >
                  {items.map((item, index) => {
                    // return custom DropdownItem component
                    return (
                      <BoogieDropdownItem
                        closeMenu={closeMenu}
                        children={item.children}
                        onSelect={item.onSelect}
                        key={index} // TODO: use a better key
                      />
                    )
                  })}
                </motion.div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  )
}
