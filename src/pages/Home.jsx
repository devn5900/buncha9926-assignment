import React from 'react'
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';

const Home = () => {
  return (
    <div className='flex lg:flex-row xs:flex-col sm:flex-col h-[85vh] my-3'>
      <LeftPanel/>
      <RightPanel/>
    </div>
  )
}

export default Home;