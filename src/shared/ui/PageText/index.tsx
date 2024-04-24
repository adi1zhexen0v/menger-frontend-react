interface Props {
  text: string;
}

export const PageText: React.FC<Props> = ({ text }) => {
  return (
    <p>{text}</p>
  )
}
