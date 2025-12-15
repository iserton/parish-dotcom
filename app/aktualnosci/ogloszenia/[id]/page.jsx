import Content from './content'


const page = ({params}) => {
  return (
    <div>
        <Content id={params.id}/>
    </div>
  )
}

export default page