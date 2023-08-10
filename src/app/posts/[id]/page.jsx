import getBlogDetails from '../../resources/blog-details'
import { DateTimePrimitive } from '../../components'

export default async function Page({ params }) {
    const response = await getBlogDetails(params)
    const data = response.data[0]
    
    return (
        <div>
           <h3>{data.Title}</h3>
           <p>{data.Preview}</p>
           <DateTimePrimitive date={data.updatedAt} format="DD-MM-YYYY" />
           <p>
            {data.Content}
           </p>
        </div>
    )
}