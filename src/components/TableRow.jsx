//Used as a component for each row in Resource.jsx
export default function TableRow({name, info}) {
  return (
    <div className='flex sm:flex-row flex-col w-full sm:gap-2 sm:text-base text-sm mb-1 mt-2'>
        <p className='sm:w-1/3'>{name}</p>
        <p className='font-bold sm:w-2/3'>{info}</p>
    </div>
  )
}
