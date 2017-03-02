export default class ApiErrors{
    constructor(errorList){
        this.errors = errorList;
        return this;
    }
    messages(){
        return this.messageList().join(" ");
    }
    messageList(){
        let errors = this.errors.error.invalidAttributes;

        let errorMessages = [];
        Object.keys(errors).forEach((error)=>{
            errors = errors[error];
            errors.forEach((error)=>{
                errorMessages.push(error.message);
            })
        })
        return errorMessages;
    }
}