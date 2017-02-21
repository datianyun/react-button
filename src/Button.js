import React, {PropTypes, Component} from 'react'
import classnames from 'classnames'
import './Button.less'

class Button extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            open :false
        }
    }

    sizeClass(size){
        let cl
        switch(size){
            case 'lg' :
                cl ='btn-lg'
                break
            case 'sm' :
                cl = 'btn-sm'
                break
            case 'xs' :
                cl = 'btn-xs'
                break
            default :
                cl = 'btn-default'
        }
        return cl
    }
    handleClick(e){
        e.preventDefault()
        e.stopPropagation()
        let target = e.currentTarget
        let cname = target.classList
        if(cname.contains('open')){
            this.setState({open : false})
        } else {
            this.setState({open : true})
        }
    }
    render() {
        const{text,type,disable,size,list} = this.props
        const sizeName = this.sizeClass(size)
        const typeName = 'btn-' + type
        const open = this.state.open
        if(list !== undefined) {
            return (
                <div className={classnames({
                    'btn-group':true,
                    'open':open
                })}   onClick={this.handleClick.bind(this)}>
                    <a href='#' className={classnames({
                        'btn':true,
                        [`btn-${type}`]:true,
                        'disabled' : disable? true : false,
                        [`${sizeName}`] : true
                    })}>{text}</a>
                    <a href="#" className={classnames({
                        'btn':true,
                        [`btn-${type}`]:true,
                        'dropdown-toggle' : true
                    })} data-toggle="dropdown">
                        <span className="caret"></span>
                    </a>
                    <ul className='dropdown-menu'>
                        {list.map((text,i)=>
                            <li><a href="#">{text}</a></li>
                        )}
                      </ul>
                </div>
            )
        } else {
            return (
                <a href='#' className={classnames({
                    'btn':true,
                    [`btn-${type}`]:true,
                    'disabled' : disable? true : false,
                    [`${sizeName}`] : true
                })}>{text}</a>
            )
        }

    }
}

Button.propTypes = {
    text : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired,
    disable : PropTypes.bool,
    size : PropTypes.string,
    list : PropTypes.array
}

export default Button
