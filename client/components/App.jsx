import React from "react";
import ReactDOM from "react-dom";

import Catalog from "./Catalog.jsx";
import Filters from "./Filters.jsx";

const App = React.createClass ({

  getInitialState() {
      return {
          filterSearch: '',
          filterCategory: []  
      };
  },

  filter(inputValue){
    this.setState({
      filterSearch: inputValue
    })
  },

  filterCategory(inputValue){
    this.setState({
      filterCategory: inputValue
    })
  },


  render() {
    return (
    		<div className="container">
          <div className="content">
            <aside id="sidebar" className=" col-3">
              <Filters filterToParent={this.filter} filterCategoryToParent={this.filterCategory} />
            </aside>
            <div id="main-content" className="col-7">
              <Catalog filterToChild ={this.state.filterSearch} filterCategoryToChild={this.state.filterCategory} />
            </div>
          </div>
    		</div>
    	)
  }
})

ReactDOM.render(
	<App />,
	document.getElementById('app-render')
);

export default App;