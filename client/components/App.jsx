import React from "react";
import ReactDOM from "react-dom";

import Catalog from "./Catalog.jsx";
import Filters from "./Filters.jsx";

const App = React.createClass ({

  getInitialState() {
      return {
          filterSearch: ''  
      };
  },

  filter(inputValue){
    this.setState({
      filterSearch: inputValue
    })
  },


  render() {
    return (
    		<div className="container">
    			<h1>Hello !</h1>
          <div className="content">
            <aside id="sidebar" className=" col-3">
              <Filters filterToParent={this.filter} />
            </aside>
            <div id="main-content" className="col-7">
              <Catalog filterToChild ={this.state.filterSearch} />
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