module.exports = function() {
	$.gulp.task('html', () => {
		return $.gulp.src('./dev/html/*.html')
			.pipe($.gfi({
				prefix: '@@'
			}))
			.pipe($.gulp.dest('./build/'))
			.pipe($.browserSync.reload({
				stream: true
			}));;
	});
};
