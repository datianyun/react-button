import './app.less'
import React, {Component,PropTypes} from 'react'
import ReactDOM from 'react-dom'
import Button from '../src/Button'
import packageJson from '../package.json'
class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const data = ['1','2','3']
        return (
            <div className="app">
                <h1>{packageJson.name}</h1>
                <h2>{packageJson.description}</h2>
                <form>
                    <h3>默认</h3>
                    <Button text='default' type='default'></Button>
                    <Button text='primary' type='primary'></Button>
                    <Button text='success' type='success'></Button>
                    <Button text='info' type='info'></Button>
                    <Button text='warning' type='warning'></Button>
                    <Button text='danger' type='danger'></Button>
                    <Button text='link' type='link'></Button>
                </form>
                <form>
                    <h3>下啦</h3>
                    <Button text='default' type='default' list={data}></Button>
                    <Button text='primary' type='primary' list={data}></Button>
                    <Button text='success' type='success' list={data}></Button>
                    <Button text='info' type='info' list={data}></Button>
                    <Button text='warning' type='warning' list={data}></Button>
                    <Button text='danger' type='danger' list={data}></Button>
                    <Button text='link' type='link'></Button>
                </form>
            </div>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById('app'));
