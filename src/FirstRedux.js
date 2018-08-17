import React from 'react'
import { Button } from 'antd-mobile'
// 专门用来连接
import { connect } from 'react-redux'
import { add, remove, addAsync } from './index.redux'

// const mapStatetoProps = (state) => {
//     return { num: state }
// }
// const actionCreators = { add, remove, addAsync }
@connect(
    state => ({ num: state.counter }),
    // mapStatetoProps, actionCreators
    { add, remove, addAsync }
)
class FirstRedux extends React.Component {
    render() {
        console.log(this.props)
        // const num = store.getState()
        const num = this.props.num
        return (
            <div>
                <h1>{`current Number : ${num}`}</h1>
                <Button onClick={() => this.props.add()} type={'primary'}>添加</Button>
                <Button onClick={() => this.props.remove()} type={'warning'}>删除</Button>
                <Button onClick={() => this.props.addAsync()} type={'primary'}>延迟2s添加</Button>
            </div>
        )
    }
}

export default FirstRedux // connect(mapStatetoProps, actionCreators)(FirstRedux)