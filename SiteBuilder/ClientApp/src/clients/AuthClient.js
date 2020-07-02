const AuthClient = {
    isAuthenticated: false,
    Login: async function (email, password) {
        const loginRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email: email, password: password})
        };
        const success = await fetch('api/auth/login', loginRequest)
                .then(response => response.json());
        this.isAuthenticated = success;
        return success;
    },
    Save: async function (id, email, password) {
        const saveRequest = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id: id, email: email, password: password})
        };

        await fetch('api/auth/save', saveRequest).then(response => response.json());
    }
}

export default AuthClient;

