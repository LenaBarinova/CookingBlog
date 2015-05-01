var gulp = require("gulp");
var plug = require("gulp-load-plugins")();

gulp.task('build', function () {
  return gulp
    .src('./index.dev.html')
    .pipe(plug.rename('index.html'))
    .pipe(plug.usemin({
      app: [plug.ngAnnotate({add: true, single_quates: true}), plug.uglify(), plug.rev()],
      theme: [plug.uglify(), plug.rev()],
      style: [plug.minifyCss(), 'concat', plug.rev()]
    }))
    .pipe(gulp.dest('./build/'))
    .on('error', plug.util.log);
});


gulp.task('deploy', function() {
  return gulp.src(['*', '**/'])
    .pipe(plug.ghPages());
});


//gulp.task('build', function () {
//  return gulp
//    .src('./js/**/*.js')
//    .pipe(plug.cleanDest('./build'))
//    .pipe(plug.ngAnnotate({add: true, single_quates: true}))
//    .pipe(plug.concat('all.js'))    
//    .pipe(plug.uglify({mangle: true}))
//    .pipe(plug.filesize())
//    .pipe(gulp.dest('./build'))
//    .on('error', plug.util.log);
//});

//var deploy = require("gulp-gh-pages");
//var options = { 
//    remoteUrl: "https://github.com/JelenaBarinova/CookingBlog.git",
//    branch: "master"};
//gulp.task('deploy', function () {
//    gulp.src("dist/**/*.*")
//        .pipe(deploy(options));
//});