export const setCookie = (res: any, result: any) => {
    console.log("from set cookie",result);

    res.cookie("jwtToken", result, {maxAge: 3 * 24 * 60 * 60 * 1000});

    console.log("set cookie ended");
}