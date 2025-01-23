
export const getCurrentExpression = (expression: string) => {
    // Remove the slashes from the expression and return a new RegExp object
    return expression ? new RegExp(expression.replace(/^\/|\/$/g, '')) : /.*/;
}