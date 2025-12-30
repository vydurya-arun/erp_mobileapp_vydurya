

type APIURL={
    EMPLOYEELIST_URL:string,
    CHECKIN_URL:string,
    CHECKOUT_URL:string,
    LOGIN_URL:string,
    LOGOUT_URL:string,
    PROFILE_URL:string,
}

export const API_URL:APIURL = {

    EMPLOYEELIST_URL :"/employees/",
    CHECKIN_URL :"/attendance/checkin",
    CHECKOUT_URL :"/attendance/checkout",
    LOGIN_URL :"/auth/employee-login",
    LOGOUT_URL :"/auth/logout",
    PROFILE_URL :"/auth/me",

};