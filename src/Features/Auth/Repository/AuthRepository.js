class AuthRepository {

    getCurrentUserService() {
        const user = JSON.parse(localStorage.getItem("taskeruser"));
        if(!user) {
            throw "no user";
        } 
        return user
    }

    login(data) {
        const user = data;

        try {
            localStorage.setItem("taskeruser", JSON.stringify(user));
            return true;
        } catch (e) {
            throw e;
        }
    }

    logout() {
        try {
            localStorage.removeItem("taskeruser");
            return true;
        } catch (e) {
            throw e;
        }
    }
}

export default AuthRepository