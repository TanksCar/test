import React from "react"
import { connect } from "dva"
import classNames from "classnames"
import "./App.less"



class Index extends React.Component{
	constructor(){
		super()
		
	}

	
	render(){
		return <div>
			<h1>我是首页面</h1>
			<div className="pic1"></div>

		</div>
	}
}

export default connect(
	(state)=>{
		return {
			
		}
	}
)(Index)