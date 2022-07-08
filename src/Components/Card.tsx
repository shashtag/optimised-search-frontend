/* eslint-disable jsx-a11y/anchor-is-valid */
type Props = {
  name: string;
  sector: string;
  symbol: string;
};

const Card = ({ name, sector, symbol }: Props) => {
  return (
    <div className='max-w-sm bg-white rounded-lg border border-gray-200 shadow-md mb-8 '>
      <img
        className='rounded-t-lg'
        src='https://cdn.logo.com/hotlink-ok/logo-social.png'
        alt={`${name} logo`}
      />

      <div className='p-5'>
        <h5 className=' text-2xl font-bold tracking-tight text-gray-900 '>
          {name} (<span className=''>{symbol}</span>)
        </h5>

        <h5 className='mb-2 text-lg font-bold tracking-tight opacity-50 text-gray-900 '>
          {sector}
        </h5>

        <p className='mb-3 font-normal text-gray-700 '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 '>
          Read more
          <svg
            className='ml-2 -mr-1 w-4 h-4'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
              clipRule='evenodd'></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Card;
