import User from './User.jsx'

export default ({users}) => {
  let lis = users.map((user, i) => (<User key={i} {...user} />))

  return (
    <ul>
      {lis}
    </ul>
  )
}
