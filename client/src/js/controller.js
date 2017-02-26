export default class{
    constructor(com){
        com.input = this.input.bind(com);
    }
    input(target, e){
        this.state = this.state || {};
        this.state[target] = e.target.value;
        this.setState(this.state)
    }
}
