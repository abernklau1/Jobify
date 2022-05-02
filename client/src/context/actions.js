// actions for displaying alert and clearing alert
export const DISPLAY_ALERT = "SHOW_ALERT";
export const CLEAR_ALERT = "CLEAR_ALERT";

// actions to setup user, when it begins, has succeeded or has an error
export const SETUP_USER_BEGIN = "SETUP_USER_BEGIN";
export const SETUP_USER_SUCCESS = "SETUP_USER_SUCCESS";
export const SETUP_USER_ERROR = "SETUP_USER_ERROR";

// action to toggle the sidebar on the dashboard
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

// action to logout the user
export const LOGOUT_USER = "LOGOUT_USER";

// actions to update the user, beginning, success, and error
export const UPDATE_USER_BEGIN = "UPDATE_USER_BEGIN";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

/* actions to handle job input, dynamically applying value of the input,
 and clearing the values */
export const HANDLE_CHANGE = "HANDLE_CHANGE";
export const CLEAR_VALUES = "CLEAR_VALUES";

// actions to create jobs, beginning, success, and error
export const CREATE_JOB_BEGIN = "CREATE_JOB_BEGIN";
export const CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS";
export const CREATE_JOB_ERROR = "CREATE_JOB_ERROR";

// actions to begin the request of getting all jobs and the success of the request
export const GET_JOBS_BEGIN = "GET_JOBS_BEGIN";
export const GET_JOBS_SUCCESS = "GET_JOBS_SUCCESS";
