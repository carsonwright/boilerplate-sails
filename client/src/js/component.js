import React from 'react';

class Component extends React.Component {
    constructor(props, methods = []){
        super(props);
        let controller = props.controller
        let com = this;
        controller = controller ? new controller(this) : {}
        methods = Array.isArray(methods) ? methods : [];

        methods.forEach(function(method){
            if(controller[method]){
                com[method] = controller[method].bind(com)
            }else{
                throw `\n The method '${method}' \n was not found in Controller ${controller.constructor.name} \n for Component ${com.constructor.name}`
            }
            
        })

        this.state = {};
        return this;
    }
}

export default Component;