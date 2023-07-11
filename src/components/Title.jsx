// Uniform font of Title accross the site
export default function Title({ children, textSizeClass = 'sm:text-3xl text-xl', textAlign = 'text-center' }) {
  return (
    <div className='items-center py-10 justify-center max-w-[80%] mx-auto'>
      <h1 className={`${textSizeClass} font-bold ${textAlign}`}>{children}</h1>
    </div>
  );
}
