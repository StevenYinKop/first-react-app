import React from 'react'
import { createStore } from 'redux'
import { Button, List } from 'antd-mobile'
class App extends React.Component {
  render() {
    const boss = 'boss22'
    return (
      <div>
        <h2>APPPPPPPPPPPP, {boss}</h2>
        <App2 name={'ABC'}/>
        <FunctionApp name={'DEF'} />
      </div>)
  }
}

const FunctionApp = (props) => <h2>{'functionApp'}, {props.name}</h2>

class App2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      v: ['1', '2', '3']
    }
  }
  
  add = () => {
    let v = this.state.v
    this.setState({v: [...v, v.length + 1]})
  }
  render() {
    return (
    <div>
      <Button type={'primary'} onClick={this.add}>add li</Button>
      <List renderHeader={()=> '列表demo'}>
          {this.state.v.map(item => <List.Item key={item}>{item}</List.Item>)}      
      </List>
      <ul>
        
      </ul>
      <h2>APPPP2, {this.props.name}</h2>
    </div>)
  }
}

export default App