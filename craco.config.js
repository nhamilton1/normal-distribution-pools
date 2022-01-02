const CracoLessPlugin = require('craco-less');

const lessModifyVars = {};

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: lessModifyVars,
                        javascriptEnabled: true,
                    },
                },
                modifyLessRule: function (lessRule, _context) {
                    lessRule.test = /\.less$/;
                    lessRule.exclude = /\.module\.less$/;
                    return lessRule;
                },
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: lessModifyVars,
                        javascriptEnabled: true,
                    },
                },
                modifyLessRule: function (lessRule, _context) {
                    lessRule.test = /\.module\.less$/;
                    lessRule.exclude = undefined;
                    return lessRule;
                },
                cssLoaderOptions: {
                    modules: { localIdentName: '[local]_[hash:base64:5]' },
                },
            },
        },
    ],
};