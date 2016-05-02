import React from "react";


let choosenCategories = [];

const Filters = React.createClass({

	getInitialState() {
	   return {
	     filter: '',
     		notebooksChecked: false,
     		phonesChecked: false
	   };
	},

	filterChild(e){
    var inputValue = e.target.value.substr(0, 100);
    this.setState({
    	filter: inputValue
    });
    this.props.filterToParent(inputValue)
  },

  checkCategory(name, inputValue, e){
  	let val = e.target.value;
  	val === "false" ? val = false: val === "true" ? val = true: null;
  	
  	let change = {};
    change[name] = !val;
    this.setState(change)

    val === false 
    ? choosenCategories.push(inputValue) 
    : choosenCategories = choosenCategories.filter(item => item !== inputValue) 

    this.props.filterCategoryToParent(choosenCategories);

    console.log("it was here");
  },

	render(){

		return(
			<div>
				<input type="text" className="search-filter" placeholder="Поиск..." 
					value={this.state.filter} 
					onChange={this.filterChild}
				/>
				<fieldset>
					<input type="checkbox" value={this.state.notebooksChecked} id="notebooksChecked" 
						checked={this.state.notebooksChecked} 
						onChange={this.checkCategory.bind(this, "notebooksChecked", "notebooks")} />

					<label htmlFor="notebooksChecked">Ноутбуки</label>
				</fieldset>
				<fieldset>
					<input type="checkbox" value={this.state.phonesChecked} id="phonesChecked" 
						checked={this.state.phonesChecked}
						onChange={this.checkCategory.bind(this, "phonesChecked", "phones")} />

					<label htmlFor="phonesChecked">Смартфоны</label>
				</fieldset>
			</div>
		)
	}
});

export default Filters;