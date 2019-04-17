import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import DropboxList from './DropboxList'

/* The main control panel page for user to send Telegram and view Dropbox API */
class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {}
    }
  }
  state ={appKey: 'vgigjj7ip52q8zr'}

  componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.first_name,
      last_name: decoded.identity.last_name,
      email: decoded.identity.email
    })
  }

  raiseInvoiceClicked(){
    const url = 'https://t.me/TeleAutoSave_bot';
    window.open(url, '_blank');
}

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          <div>
            Please send the photos of text "purchases" and receipts to the following Telegram:
            <div>
              <button type="button" className="btn btn-default pull-right" onClick={this.raiseInvoiceClicked}>https://t.me/TeleAutoSave_bot </button>
            </div>
          </div>
        </div>
        <div>
          <DropboxList appKey={this.state.appKey}/>
        </div>
      </div>
    )
  }
}

export default Profile
