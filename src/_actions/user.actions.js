import { actionTypes } from './actionTypes';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const userActions = {
    login,
    logout,
    // getAll
};

function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error));
                }
            );
    };

    function request(user) { return { type: actionTypes.LOGIN_REQUEST, user } }
    function success(user) { return { type: actionTypes.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: actionTypes.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: actionTypes.LOGOUT };
}

// function getAll() {
//     return dispatch => {
//         dispatch(request());

//         userService.getAll()
//             .then(
//                 users => dispatch(success(users)),
//                 error => dispatch(failure(error))
//             );
//     };

//     function request() { return { type: actionTypes.GETALL_REQUEST } }
//     function success(users) { return { type: actionTypes.GETALL_SUCCESS, users } }
//     function failure(error) { return { type: actionTypes.GETALL_FAILURE, error } }
// }