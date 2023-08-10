import getBlogDetails from '../../resources/blog-details'
import { DateTimePrimitive } from '../../components'


export default async function Page({ params }) {
    const response = await getBlogDetails(params)
    const data = response.data[0]
    
    return (
        <div>
           <h3>{data.title}</h3>
           <p>{data.shortDescription}</p>
           <DateTimePrimitive date={data.updatedAt} format="DD-MM-YYYY" />
        </div>
    )
}