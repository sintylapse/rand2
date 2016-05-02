import React from "react";

const Filters = React.createClass({

	getInitialState() {
	   return {
	     filter: ''  
	   };
	},

	filterChild(e){
    var inputValue = e.target.value.substr(0, 100);
    this.setState({
    	filter: inputValue
    });
    this.props.filterToParent(inputValue)
  },


	render(){

		return(
			<div>
				<input type="text" className="search-filter" placeholder="Поиск..." 
					value={this.state.filter} 
					onChange={this.filterChild}
				/>
			</div>
		)
	}
});

export default Filters;