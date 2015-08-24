module.exports = function (grunt) {

    // project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        }
    });
    
    // load the plugin that provides the uglify task
    grunt.loadTasks('grunt-contrib-uglify');
    
    // default task(s).
    grunt.registerInitTask('default', ['uglify']);
};
