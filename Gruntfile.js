module.exports = function(grunt) {

	require("load-grunt-tasks")(grunt);
	
	grunt.initConfig({
		less: {
			style: {
				files: {
					"build/css/style.css":["source/less/style.less"]
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ["last 4 versions", "ie 10"]
			},
			style: {
				src: "build/css/style.css"
			}
		},
		cssmin: {
			style: {
				options: {
					keepSpecialComments: 0,
					report: "gzip"
				},
				files: {
					"build/css/style.min.css":["build/css/style.css"]
				}
			}
		},
		imagemin: {
			images: {
				options: {
					optimizationLevel: 1
				},
				files: [{
					expand: true,
					src: ["build/img/**/*.{png,jpg,gif,svg}"]
				}]
			}
		},
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhiteSpace: true,
				collapseBooleanAttributes: true,
				caseSensitive: true,
				keepClosingSlash: false
			},
			html: {
				files: {
					"build/index.min.html":"build/index.html"
				}
			}
		},
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: "source",
					src: [
						"img/**",
						"js/**",
						"index.html",
						"fonts/**"
					],
					dest: "build"
				}]
			}
		},
		clean: {
			build: ["build"]
		}
	});
	grunt.registerTask("build",[
		"clean",
		"copy",
		"less",
		"autoprefixer",
		"cssmin",
		"imagemin",
		"htmlmin"
	]);
};
