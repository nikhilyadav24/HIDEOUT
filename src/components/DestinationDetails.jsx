import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../data/data.js';

const DestinationDetails = () => {
  const { id } = useParams();
  const place = data.find(item => item.id === parseInt(id));


  if (!place) {
    return <div>shared not found!</div>;
  }
  
  return (
    <div className=' max-w-[1640px] m-auto px-2 py-6'>
      <img className="h-96 w-full rounded-lg object-cover object-center" src={place.image} alt={place.name} />
      <div className='px-2 py-6'>
        <div className='px-1 py-3'>
          <div className='px-1 py-1'>
            <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              <span className="text-transparent bg-clip-text bg-primary to-emerald-600 from-sky-400">{place.name}</span>
            </h1>
          </div>
          <div className='px-1 py-1'></div>
        </div>
        <div className='flex flex-row justify-between '>
          <div>
        <p className="max-w-lg text-2xl font-bold leading-normal text-gray-900 dark:text-grey-900">Type: {place.category}</p>
        <p className="max-w-lg text-2xl leading-normal text-gray-900 dark:text-grey-900"><span className='max-w-lg text-2xl font-bold leading-normal text-gray-900 dark:text-grey-900'>Uploaded by: </span> {place.id}</p>
        <p className="max-w-lg text-2xl leading-normal text-gray-900 dark:text-grey-900"><span className='max-w-lg text-2xl font-bold leading-normal text-gray-900 dark:text-grey-900'>Likes: </span>{place.rating}</p>
        <span className='max-w-lg text-2xl font-bold leading-normal text-gray-900 dark:text-grey-900'>Story:</span>
        <p className="max-w-lg text-2xl leading-normal text-gray-900 dark:text-grey-900">{place.description}</p>
        <br />
        </div>
        </div>
      </div>
    </div>
  );
};
 
export default DestinationDetails;
