import { createContext, useContext, useEffect, useState } from "react";

export const TokenGlobalDataContext = createContext("");
export const TokenGlobalDispatchContext = createContext("");
export const TokenValidGlobalDispatchContext = createContext("");

export function useTokenData() {
    return useContext(TokenGlobalDataContext);
}

export function useTokenDispatch() {
    return useContext(TokenGlobalDispatchContext);
}

export function AuthProvider({ children }) {
    let [accessToken, setAccessToken] = useState("");

    async function GetToken() {
        const response = await fetch(
            "https://test.api.amadeus.com/v1/security/oauth2/token",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams({
                    client_id: process.env.REACT_APP_CLIENT_ID,
                    client_secret: process.env.REACT_APP_CLIENT_SECRET,
                    grant_type: process.env.REACT_APP_GRANT_TYPE
                })
            }
        );

        const data = await response.json();
        setAccessToken({
            token: data.access_token,
            tokenExpiryEnd: Date.now() + data.expires_in * 1000
        });
        return data.access_token;
    }
    useEffect(() => {
        GetToken();
        // eslint-disable-next-line
    }, []);

    return (
        <TokenGlobalDataContext.Provider value={accessToken}>
            <TokenGlobalDispatchContext.Provider value={GetToken}>
                {children}
            </TokenGlobalDispatchContext.Provider>
        </TokenGlobalDataContext.Provider>
    );
}
