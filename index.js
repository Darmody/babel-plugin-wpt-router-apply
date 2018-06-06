module.exports = function () {
    return {
        name: 'wpt-router-apply',

        visitor: {
            CallExpression(path) {
                if (path.node.name === 'apply') {
                    console.log(path);
                }
            }
        }
    }
}