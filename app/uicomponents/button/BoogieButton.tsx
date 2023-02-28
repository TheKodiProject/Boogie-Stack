import { useRef, ReactNode } from 'react'
import { FocusRing } from '@react-aria/focus'
import { useButton, AriaButtonProps } from '@react-aria/button'
import { motion, useAnimation } from 'framer-motion'

export interface IBoogieButtonProps {
  children: ReactNode
  onClick: () => void
}

export function BoogieButton(props: IBoogieButtonProps) {
  const variants = {}
  let ref = useRef<HTMLButtonElement>(null)
  let controls = useAnimation()
  let { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.start({
          transition: {
            type: 'spring',
            stiffness: 100,
            damping: 10,
            mass: 0.25,
          },
        })
      },
      onPressEnd: () => {
        // implement on pressEnd
      },
      onPress: () => {
        props.onClick()
      },
    },
    ref
  )

  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      {/* @ts-ignore */}
      <motion.button
        variants={variants}
        whileTap={{ scale: 1.2, borderRadius: '6px' }}
        className="bg-pink-400 rounded-lg p-4 shadow font-mono font-semibold"
        {...buttonProps}
        ref={ref}
        animate={controls}
      >
        {props.children}
      </motion.button>
    </FocusRing>
  )
}
