import ApiErrorsKlass from './api-errors';

let ApiErrors = function(errors){
    return new ApiErrorsKlass(errors);
};

export {
    ApiErrors
};