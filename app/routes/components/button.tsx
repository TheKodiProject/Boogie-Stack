import { BoogieButton } from '~/uicomponents/button/BoogieButton'

export default function buttonDemo() {
  return (
    <div className="flex min-h-full items-center justify-center bg-purple-900">
      <BoogieButton onClick={() => console.log('woo')}>
        Clicky Clicky!
      </BoogieButton>
    </div>
  )
}
