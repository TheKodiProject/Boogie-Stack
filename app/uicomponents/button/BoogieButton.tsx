import { useRef, ReactNode, Fragment } from 'react'
import { useButton } from '@react-aria/button'
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
    <Fragment>
      {/* @ts-ignore */}
      <motion.button
        variants={variants}
        // TODO: make border radius dynamic within design system/tailwind config
        whileTap={{ scale: 1.2, borderRadius: '6px' }}
        className="bg-pink-400 rounded-lg p-4 shadow font-mono font-semibold"
        {...buttonProps}
        ref={ref}
        animate={controls}
      >
        {props.children}
      </motion.button>
    </Fragment>
  )
}
