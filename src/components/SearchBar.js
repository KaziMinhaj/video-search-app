import React, { Component } from 'react'

export default class SearchBar extends Component {
    state={
        term: ''
    }
    onInputChange = (event) => {
        this.setState({
            term : event.target.value
        })
        console.log(this.state.term)
    }
    onInputSubmit=(event)=>{
        event.preventDefault();
        this.props.onTermSubmit(this.state.term)
    }

    render() {
        return (
            <div className="search-bar ui segment">
               <form onSubmit={this.onInputSubmit} className="ui form">
                   <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                   </div>
               </form>
            </div>
        )
    }
}
