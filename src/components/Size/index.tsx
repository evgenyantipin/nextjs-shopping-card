import React from 'react'

type Props = {
  size: string
  selectSize: (e: React.SyntheticEvent<HTMLLabelElement>) => void
}

const Size: React.FC<Props> = ({ size, selectSize }) => {
  return (
    <label data-size={size} onClick={selectSize}>
      <input
        className="w-9 mr-6 h-9 flex items-center justify-center bg-gray-100 rounded-lg"
        name="size"
        type="radio"
        value="xs"
      />
      <span className="text-xs font-semibold text-gray">{size}</span>
    </label>
  )
}

export default Size
