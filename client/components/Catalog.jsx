import React from "react";
import $ from "jquery";

const jsonPath = "../model/products.json" 

const ProductDescription = React.createClass({
	
	render(){

		return(
			<div>
				<div>
					{this.props.instock 
						? <div className="stock true"><i className="fa fa-check-circle-o" aria-hidden="true"></i> Есть в наличии</div> 
						: <div className="stock false"><i className="fa fa-times" aria-hidden="true"></i> Под заказ</div>
					}
				</div>
				<div className="text">{this.props.description}</div>
			</div>
		)
	}
});

const Catalog = React.createClass({

	
	getInitialState() {
	    return {
	    	data: [],
	    	current: 0
	    };
	},

	componentDidMount() {
    $.ajax({
      url: jsonPath,
      dataType: 'json',
      cache: false,
      success: function(data) {
       	this.setState({data: data});
        console.info("Json was loaded");
      }.bind(this),
      error: function(errObj) {
        console.error("Error: " + errObj.responseText);
      }.bind(this)
    });
  },

  handleMore(e){
  	this.setState({
  		current: this.state.current === e.id ? 0 : e.id
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
							<div key={item.id} className={this.state.current === item.id ? "current product" : "product"}>
								<div className="product-wrapper">
									<div className="image col-5"><img src={"images/stock/" + item.id + ".jpg"} /></div>
									<div className="product-info col-7">
										<h2>{item.title}</h2>
										<div className="cfix">
											<div className="product-cost">
												<span className="total">{item.cost.toString().replace(/(\d{1,3})(?=(?:\d{3})+$)/g, '$1 ')}</span> 
												<span className="currency"> руб.</span>
											</div>

											<button className="product-more" 
											onClick={this.handleMore.bind(this, item)}>
												{this.state.current === item.id ? <i className="fa fa-share" aria-hidden="true"></i> : "Подробнее"}
											</button>
										</div>
										{
											this.state.current === item.id 
											? <ProductDescription 
													brand={item.brand} 
													instock={item.instock} 
													description={item.description} /> 
											: null
										}
									</div>
									
								</div>
							</div>	
						)
					}
				</div>
			)
		} else{
			return <h2 className="nothing-found fadeInUp">Ничего не найдено</h2>
		}

		
	}
})

export default Catalog;