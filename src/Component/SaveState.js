import React, { Component } from 'react';


class SaveState extends Component {
    obj=[];
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: 0,
        }
        if(localStorage.getItem('list')){
            this.obj=[
                JSON.parse(localStorage.getItem('list'))
            ]
        }
    }
    
    saveObject = (event) => {
        localStorage.setItem("list", JSON.stringify(this.state));
    }

    setName = (event) => {
        this.setState({ name: event.target.value });
    }
    setAge = (event) => {
        this.setState({ age: event.target.value });
    }
 
    render() {
     
       const display = this.obj.map((x,index)=>(
            <tr>
                <td>{x.name}</td>
                <td>{x.age}</td>
            </tr>
       ))

       
        return (
 
            <div>
                <form onSubmit={this.saveObject}>
                    <div className="form-group">
                        <label htmlFor="input_name">Name: </label>
                        <input type="text" className="form-control"
                            id="input_name" aria-describedby="emailHelp"
                            placeholder="Enter Name..."
                            onChange={this.setName} />
                        <small id="mess" className="form-text text-muted">Message...</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="input_age" />
                        <input type="number" className="form-control"
                            id="input_age" placeholder="Enter Age"
                            onChange={this.setAge} />
                    </div>
                    <div className="form-group">
                        <button type="submit"
                            className="btn btn-primary"
                        >Save</button>
                    </div>

                </form>

                <div className="display">
                    <h3>Dữ liệu bạn vừa nhập: </h3>
                    <h4>Name: {this.state.name}</h4>
                    <h4>Age: {this.state.age}</h4>
                </div>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>

                        </tr>
                    </thead>
                    <tbody>
                       {display}
                    </tbody>
                </table>

            </div >
        );
    }
}

export default SaveState;