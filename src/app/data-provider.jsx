import React from 'react';
import Repeater from './repeater';

const DataProvider = async (props) => {
  let data = null
  const {
     fetcher,
     initialData,

   } = props;

  try {
    const response = await fetcher()
    data = response.data
  } catch(error) {
    console.log(error)
  }

  if (data === null) {

  }

  return (
    <div>
      <Repeater items={data}>
        <div>

        </div>
      </Repeater>
    </div>
  )

};

export default DataProvider
