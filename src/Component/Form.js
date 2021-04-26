import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            balance: 10000,
            choice: 'id_1',
            errorMes:'',
            nameChoice:''
        }
    }
    myChangeHandler = (event) => {
        this.setState({choice: event.target.value});
        if(this.state.choice!='')
        this.pay()
        }
    pay=()=>{
        let choice=this.state.choice
        let price=0
        switch(choice){
            case "id_1":{
                price=20000
                this.check(price)
                break;
            }
           
            case "id_2":{
                price=10000
                this.check(price)
                break;
            }
           
            case "id_3":{
                price=5000
                this.check(price)
                break;
            }
           
            case "id_4":{
                price=15000
                this.check(price)
                break;
            }
            default: 
            this.setState({errorMes:'Không Hợp Lệ!'})
            break;
    }
}

    check=(value)=>{
        let balance=(this.state.balance)
        if(value>balance){
            this.setState({errorMes:'Không đủ số dư để giao dịch!'+'Còn thiếu: '+ balance-value})

        }if(value<=balance){
            this.setState({errorMes:'Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!'})
        }
    }
    render() {
        return (
            <div>
                <form  id="choice" >
                    <label>Please choose your drink!</label>
                    <br></br>
                    <h3>Your current balance: {this.state.balance} VNĐ</h3>
                    <br></br>
                    <label>Your Choice:</label>
                    <select  onChange={this.myChangeHandler}>
                        <option value="id_1">Trà Sữa</option>
                        <option value="id_2">Cà Phê Đen</option>
                        <option value="id_3">Nước Lọc</option>
                        <option value="id_4">Sữa Tươi</option>
                    </select>
                </form>
                <h4>The drink you just chose: {this.state.choice}</h4>
                <h4>Message: {this.state.errorMes}</h4>
            <input type="submit"></input>
            </div>
        );
    }
}



export default Form;