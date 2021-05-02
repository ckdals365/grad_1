module.exports = function(width) {
    return {
        area: function () {
            return width ** 2;
        },
        outline: function() {
            return width * 4;
        },
    };
};
