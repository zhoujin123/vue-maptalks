module.exports = {
    rules: [
        {
            test: require.resolve("three/examples/js/controls/OrbitControls"),
            use: "imports-loader?THREE=three"
        },
        {
            test: require.resolve("three/examples/js/controls/OrbitControls"),
            use: "exports-loader?THREE.OrbitControls"
        }
    ]
}