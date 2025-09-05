export const fib = (x) => {
    let f0 = 0;
    let f1 = 1;
    let t;
    for (let i = 0; i < x; i++) {
        t = f1;
        f1 = f0 + f1;
        f0 = t;
    }
    return f0;
}

export const handler = async (event, context) => {
    const { x: qs_x } = event.queryStringParameters || {};
    const x = Number(qs_x);
    let response;
    if (isNaN(x) || x < 0) {
        response = {
            statusCode: 400,
            body: JSON.stringify({
                'type': 'error',
                'message': 'x should be a nonnegative integer'
            })
        }
    } else {
        const result = fib(x);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                type: 'success',
                result
            })
        }
    }
    return response;
};
