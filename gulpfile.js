var gulp = require("gulp");

var sass = require("gulp-sass");
 
gulp.task("sass", function() {
    gulp.src("./public/stylesheets/sass/**/*scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/stylesheets/css"));
});