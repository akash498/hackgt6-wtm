import React from 'react';
import axios from 'axios';

export default class MoveInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            isShowing: true,
            numVisits: 21,
            timeframe: 5,
            averagePrice: 12.00
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
            
            let avg = 0

            // Calculate most popular item from the data
            for (var transaction in res.page_content) {
                avg += transaction.grandAmount
            }

            avg = avg / res.page_content.length

            this.setState({
                averagePrice: avg
            })
        })
        
    }
    
    render() {
        return (
            <div className="bg-white rounded-sm p-5">
                <div>Details: </div>
                <img src={this.props.info.image_url} className="mx-auto"></img>

                <div>{this.state.numVisits} visits in the past {this.state.timeframe} hours:</div>
                <div>The average price for a trip to {this.props.info.name} right now is ${this.state.averagePrice}</div>
            </div>
        )
    }
}