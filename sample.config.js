module.exports = function() {
    switch(process.env.NODE_ENV) {
        case 'development':
            return {key: 'dev setting'};

        case 'production':
            return {key: 'prod settings'};

        default:
            return {key: 'error or other settings'};
    }
};
