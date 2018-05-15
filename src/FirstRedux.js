import React from 'react'
import { Button } from 'antd-mobile'
// import { add, remove } from './index.redux'

export default class FirstRedux extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        const store = this.props.store
        const num = store.getState()
        return (
            <div>
                <h1>{`current Number : ${num}`}</h1>
                <Button onClick={() => store.dispatch(this.props.add())} type={'primary'}>添加</Button>
                <Button onClick={() => store.dispatch(this.props.remove())} type={'warning'}>删除</Button>
                <Button onClick={() => store.dispatch(this.props.addAsync())} type={'primary'}>延迟2s添加</Button>
            </div>
        )
    }

}