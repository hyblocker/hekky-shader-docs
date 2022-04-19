
const waitForGlobal = function(key, callback) {
    if (window[key]) {
        callback();
    } else {
        setTimeout(function() {
            waitForGlobal(key, callback);
        }, 100);
    }
};

waitForGlobal("Fuse", function() {
    // Fuse loaded!

	// TODO: Fetch from JSON
    const searchEntries = [
        "among us"
    ];

    const options = {
        includeScore: true,
        keys: [{
            name: 'title',
            weight: 0.3
        }, {
            name: 'author',
            weight: 0.7
        }]
    };

    const fuse = new Fuse(searchEntries, options);

    const result = fuse.search('us');
    console.log(result);
});