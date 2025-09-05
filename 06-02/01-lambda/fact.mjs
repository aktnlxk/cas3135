export const fact = (x) => {
    let result = 1;
    for (let i = 1; i <= x; i++) {
        result *= i;
    }
    return result;
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
        const result = fact(x);
        response = {
            statusCode: 200,
            body: JSON.stringify({
                type: 'success',
                result
            })
        }
    }
    return response;
}
