import React from "react"
import { connect } from "dva"
import classNames from "classnames"
import { Button } from "antd"
import { Router,Route,routerRedux } from "dva/router"
import "./App.less"

class Password extends React.Component{
	constructor({a}){
		super()
		this.state={
			display:false
		}
		
	}
	yanz(z,m){
		this.props.password.password.data.forEach((item)=>{
			if(item.zhanghao==z){
				if(item.password==m){
					this.props.dispatch(routerRedux.push("/Index"))
				}
			}else{
				this.setState({
					display:true
				})
			}
		})

	}

	render(){
		return <div className="kuangkuang">
			<p className="zhanghao"><span>账号：</span><input type="text" ref="zhang"/></p>
			<p className="password"><span>密码：</span><input type="text" ref="mi"/></p>
			
			{
				this.state.display?<p className="zm">账号或密码错误！！</p>:""
			}
			<Button type="primary" onClick={()=>{this.yanz(this.refs.zhang.value,this.refs.mi.value)}}>登录</Button>
			<Button type="primary" className="return" onClick={()=>{this.props.a()}}>返回</Button>
		</div>
	}
}

export default connect(
	(password)=>{
		return {
			password
		}
	}
)(Password)