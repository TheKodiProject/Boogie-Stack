import BoogieDropdown from '~/uicomponents/dropdown/Dropdown'

export default function BoogieBooth() {
  const testItems = [
    {
      children: 'Item 1',
      onSelect: () => console.log('Clicked Item 1'),
      id: 'item1',
    },
    {
      children: 'Item 2',
      onSelect: () => console.log('Clicked Item 2'),
      id: 'item2',
    },
    { children: 'Item 3', onSelect: () => alert(';)'), id: 'item3' },
  ]
  return (
    <div className="flex min-h-full items-center justify-center bg-purple-900">
      <BoogieDropdown label="dropdown" items={testItems} />
    </div>
  )
}
