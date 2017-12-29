import {connect} from 'react-redux'
import UserList from './UserList.jsx'

export default connect(
  state => { return {users: state.users} }
)(UserList)
