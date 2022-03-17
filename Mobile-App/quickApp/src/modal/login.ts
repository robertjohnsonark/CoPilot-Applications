/**
 *  modal interface for login
 */
export interface loginRequest {
        username: string;
        password: string;
        grant_type: string;
}

export interface User {
        userId: number;
        name: string;
        fullname: string;
        jobtitle: string;
        phone: string;
        emailid: string;
        roleId: number;
        permission: string[];
}

export interface loginResponse {
        access_token: string;
        refresh_token: string;
        expires_in: number;
        status: boolean;
        user: User;
}
