import React from 'react';
import axios from 'axios';

export default class MoveInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowing: true,
            numVisits: 0,
        }
    }
    componentDidMount() {
        this.setState({
            isShowing: false,
        })
    }
    closeInfo = () => {
        this.setState({
            isShowing: !this.state.isShowing
        })
    }
    receiveNCRData = () => {
        let NCRurl = 'https://gateway-staging.ncrcloud.com/transaction-document/transaction-documents/find';
        axios.post(NCRurl, {
          headers: {
            'Accept': 'application/json', 
            'Accept-Encoding': 'gzip, deflate',
            'Authorization': 'Basic acct:root@hack_the_wu_experiment:SDU1MnlvfXtdNQo=',
            'Content-Type': 'application/json',
            'nep-application-key': '8a008d406ddb112d016e09f36b740041',
            'nep-organization': 'ur-hack',
            'nep-service-version': '2:1'
          },
          data: {
              fromTransactionDateTimeUtc: {
                  dateTime: '2018-11-13T20:19:39.020Z',
                  originalOffset: 'String'
              }
          }
        })
        .then((res) => {
            this.setState({
                numVisits: res.data.totalResults
            })
        })
        
    }
    
    render() {
        return (
            <div>
                <div>Details: </div>
                <div>Number of visits in the past week: {this.state.numVisits}</div>
                <button onClick={this.props.handleClose}>Hide</button>
            </div>
        )
    }
}