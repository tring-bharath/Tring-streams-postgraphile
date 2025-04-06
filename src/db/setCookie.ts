export const setCookie = (res: any, result: any) => {
    res.cookie("jwtToken", result, {maxAge: 3 * 24 * 60 * 60 * 1000});
}