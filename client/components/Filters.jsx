import React from "react";

let choosenCategories = [];
let choosenBrands = [];

const Filters = React.createClass({

	getInitialState() {
	   return {
	     filter: '',
     		notebooksChecked: false,
     		phonesChecked: false,
     		lenovoChecked: false,
     		asusChecked: false,
     		appleChecked: false,
     		xiaomiChecked: false,
     		samsungChecked: false
	   };
	},

	filterChild(e){
    var inputValue = e.target.value.substr(0, 100);
    this.setState({
    	filter: inputValue
    });
    this.props.filterToParent(inputValue)
  },

  checkCategory(name, inputValue, type, e){
  	let val = e.target.value;
  	val === "false" ? val = false: val === "true" ? val = true: null;
  	
  	let change = {};
    change[name] = !val;
    this.setState(change)

    if (type === "category"){
  	 	val === false 
	    ? choosenCategories.push(inputValue) 
	    : choosenCategories = choosenCategories.filter(item => item !== inputValue) 

	    this.props.filterCategoryToParent(choosenCategories);
    } else if (type === "brand"){

    	val === false 
	    ? choosenBrands.push(inputValue) 
	    : choosenBrands = choosenBrands.filter(item => item !== inputValue) 

	    this.props.filterBrandToParent(choosenBrands);
    }
  },

	render(){

		return(
			<div>
				<input type="text" className="search-filter" placeholder="Поиск..." 
					value={this.state.filter} 
					onChange={this.filterChild}
				/>
				<div className="category-filters">
					<fieldset>
						<input type="checkbox" value={this.state.notebooksChecked} id="notebooksChecked" 
							checked={this.state.notebooksChecked} 
							onChange={this.checkCategory.bind(this, "notebooksChecked", "notebooks", "category")} />

						<label htmlFor="notebooksChecked">Ноутбуки</label>
					</fieldset>
					<fieldset>
						<input type="checkbox" value={this.state.phonesChecked} id="phonesChecked" 
							checked={this.state.phonesChecked}
							onChange={this.checkCategory.bind(this, "phonesChecked", "phones", "category")} />

						<label htmlFor="phonesChecked">Смартфоны</label>
					</fieldset>
				</div>

				<div className="brand-filters">
					<fieldset>
						<input type="checkbox" value={this.state.lenovoChecked} id="lenovoChecked" 
							checked={this.state.lenovoChecked}
							onChange={this.checkCategory.bind(this, "lenovoChecked", "lenovo", "brand")} />

						<label htmlFor="lenovoChecked">Lenovo</label>
					</fieldset>
					<fieldset>
						<input type="checkbox" value={this.state.asusChecked} id="asusChecked" 
							checked={this.state.asusChecked}
							onChange={this.checkCategory.bind(this, "asusChecked", "asus", "brand")} />

						<label htmlFor="asusChecked">Asus</label>
					</fieldset>
					<fieldset>
						<input type="checkbox" value={this.state.appleChecked} id="appleChecked" 
							checked={this.state.appleChecked}
							onChange={this.checkCategory.bind(this, "appleChecked", "apple", "brand")} />

						<label htmlFor="appleChecked">Apple</label>
					</fieldset>
					<fieldset>
						<input type="checkbox" value={this.state.samsungChecked} id="samsungChecked" 
							checked={this.state.samsungChecked}
							onChange={this.checkCategory.bind(this, "samsungChecked", "samsung", "brand")} />

						<label htmlFor="samsungChecked">Samsung</label>
					</fieldset>
					<fieldset>
						<input type="checkbox" value={this.state.xiaomiChecked} id="xiaomiChecked" 
							checked={this.state.xiaomiChecked}
							onChange={this.checkCategory.bind(this, "xiaomiChecked", "xiaomi", "brand")} />

						<label htmlFor="xiaomiChecked">Xiaomi</label>
					</fieldset>

				</div>
			</div>
		)
	}
});

export default Filters;