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
        controls.stop()
        controls.set({ background: 'purple' })
      },
      onPressEnd: () => {
        controls.start({
          background: 'pink',
          transition: { duration: 0.4 },
        })
      },
      onPress: () => {
        props.onClick()
        controls.start({
          background: [null, 'pink'],
          transition: { duration: 0.4 },
        })
      },
    },
    ref
  )

  return (
    <FocusRing focusRingClass="ring ring-offset-2 ring-offset-black">
      {/* @ts-ignore */}
      <motion.button
        variants={variants}
        whileHover={{ scale: 1.2 }}
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
