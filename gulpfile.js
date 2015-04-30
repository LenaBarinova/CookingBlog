var gulp = require("gulp");
var deploy = require("gulp-gh-pages");
var options = { 
    remoteUrl: "https://github.com/JelenaBarinova/CookingBlog.git",
    branch: "master"};
gulp.task('deploy', function () {
    gulp.src("dist/**/*.*")
        .pipe(deploy(options));
});