type Props = {
  span: string
  title: string
  description?: string
}

const Title = ({ span, title, description }: Props) => {
  return (
    <div>
      <span>{span}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Title
