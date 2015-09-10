var gulp = require('gulp'),
nodemon = require('gulp-nodemon');

gulp.task('serve',function(){
	nodemon({
		script: 'index.js',
		ext:'js',
		env:{
			PORT : 3030,
			IP : '127.0.0.1',
			API_KEY : "your_mailgun_api",
			DOMAIN : "yourdomain.me",
			FROM_WHO : "you@yourname.me"
		},
		ignore:['./node_modules/**']
	});
});