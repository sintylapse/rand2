import React from "react";
import $ from "jquery";

const jsonPath = "../model/products.json" 

const Catalog = React.createClass({

	getInitialState() {
	    return {
	    	data: []
	    };
	},

	componentDidMount() {
    $.ajax({
      url: jsonPath,
      dataType: 'json',
      cache: false,
      success: function(data) {
       	this.setState({data: data});
        console.info("Json was loaded from " + jsonPath);
      }.bind(this),
      error: function(errObj) {
        console.error("Error: " + errObj.responseText);
      }.bind(this)
    });
  },

	render(){

		let filteredData = this.state.data.filter((item) =>{
			return item.title.toLowerCase().indexOf(this.props.filterToChild) !== -1;
		});

		if (filteredData.length !== 0){
			return(
				<div>
					{
						filteredData.map(item =>
							<div key={item.id} className="product">
								<div className="product-wrapper">
									<div className="image col-5"><img src={"images/stock/" + item.id + ".jpg"} /></div>
									
									<div className="product-info col-7">
										<h2>{item.title}</h2>
										
										<div className="product-cost">
											<span className="total">{item.cost.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')}</span> 
											<span className="currency"> руб.</span>
										</div>
										<button className="product-more">Подробнее</button>
										
									</div>
								</div>
							</div>	
						)
					}
				</div>
			)
		} else{
			return <div className="nothing-found fadeInUp">Ничего не найдено</div>
		}

		
	}
})

export default Catalog;