import getDetails from './resources/details'

const Author = async ({ id }) => {
  const response = await getDetails({ 'filters[id]': id })
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
      {response.data[0].Name}
      <img style={{ width: '30px', borderRadius: '50%'}} src={response.data[0].avatar.url} />
    </div>
  )
}

export default Author
