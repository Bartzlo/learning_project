import User from './User'
import {connect} from 'react-redux'

const UserList = ({users}) => {
  let lis = users.map((user, i) => (<User key={i} {...user} />))

  return (
    <ul>
      {lis}
    </ul>
  )
}

const mapStateToPrps = (state) => {
  return {users: state.users}
}

export default connect(mapStateToPrps)(UserList)
