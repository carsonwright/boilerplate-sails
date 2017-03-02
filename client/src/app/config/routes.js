import sessions from '../pages/users/sessions';
import signup from '../pages/users/signup';
import home from '../pages/home/index';
export default {
    "/sessions": sessions,
    "/signup": signup,
    "*": home
};