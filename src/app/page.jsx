import React from 'react'
import Head from 'next/head'
import getList from './resources/list'
import Author from './author'
import { DateTimePrimitive } from './components'


const Home = async (props) => {
  const response = await getList()
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Antique Nocturnal Hornet</title>
          <meta property="og:title" content="Antique Nocturnal Hornet" />
        </Head>
        <div>
          {response.data.map((item) => {
            console.log(item)
            return (
              <div key={item.id} style={{ margin: '16px'}}>
                <h3>{item.Title}</h3>
                <p>{item.Preview}</p>
                <Author id={item.author.id} />
                <DateTimePrimitive date={item.updatedAt} format="DD-MM-YYYY" />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home
