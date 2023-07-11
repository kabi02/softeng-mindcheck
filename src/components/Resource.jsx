import TableRow from './TableRow';

// use as a component for each resource
const Table = ({ height, title, url, desc, rows }) => {
  return (
    <div className={`bg-white w-11/12 rounded-xl py-6 px-8 ${height}`} >
      <h2 className='font-bold md:text-xl'>
        <a href={url} target='_blank'>{title}</a>
      </h2>
      <p className='sm:text-base text-sm mb-5'>{desc}</p>
      {/* all of the infos per row will be pass to TableRow */}
      {rows.map((row) => (
        <TableRow key={row.name} name={row.name} info={row.info} />
      ))}
    </div>
  );
};

export default Table;