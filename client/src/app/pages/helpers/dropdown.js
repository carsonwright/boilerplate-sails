import React from 'react';
import Component from '../../config/component';
import style from './dropdown.scss';

class Dropdown extends Component {
    constructor(props){
        super(props)
        this.handleOpenToggle = this.handleOpenToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleOpenToggle(){
        this.setState({open: !this.state.open})
    }
    handleClose(){
        this.setState({open: false})
    }
    render(){
        return (
            <div onMouseLeave={this.handleClose} className={style.dropDown}>
                <div onMouseEnter={this.handleOpenToggle}>{this.props.button}</div>
                {!this.state.open || (<div className={`${style.dropDownInner} ${!this.props.position || this.props.position != 'right' ? style.right : ''}`}>
                    {this.props.children}
                </div>)}
            </div>
        )
    }
}

export default Dropdown;