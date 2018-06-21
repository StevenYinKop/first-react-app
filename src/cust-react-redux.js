import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from './cust-redux'
// connect 负责连接组件, 将redux里的数据放到组件的属性中
// 1. 负责接受一个组件, 把state里的一些数据放进去, 返回一个组件
// 2. 数据变化的时候能够通知组件
export const connect = (mapStateToProps = state=>state , mapDispatchToProps={}) =>
    (WrapComponent) => 
        class ConnectComponent extends React.Component {
            static contextType = {
                store: PropTypes.object
            }
            constructor(props, context) {
                super(props, context) 
                this.state = {
                    props: {}
                }
            }
            componentDidMount() {
                const { store } = this.context
                store.subscribe(() => this.update())
                this.update()
            }
            update() {
                // 获取mapStateToProps和mapDispatchToProps 放入this.props中
                const { store } = this.context
                const stateProps = mapStateToProps(store.getState())
                const dispatchProps = bindActionCreators(mapDispatchToProps, store)
                this.setState({
                    props: {
                        ...this.state.props,
                        ...stateProps,
                        ...dispatchProps,
                    },
                })
            }
            render(){
                return <WrapComponent {...this.state.props}> </WrapComponent>
            }
        }
 
export class Provider extends React.Component {
    static childContextType = {
        store: PropTypes.object
    }
    getChildContext() {
        return { store: this.store }
    }
    constructor(props, context) {
        super(props, context)
        this.store = props.store
    }
    render() {
        return this.props.children
    }

}
// Provider, 把store放到context中, 所有的子元素可以直接取到store