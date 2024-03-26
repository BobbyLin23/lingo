"use strict";
exports.__esModule = true;
exports.userProgressRelations = exports.coursesRelations = exports.userProgress = exports.courses = void 0;
var drizzle_orm_1 = require("drizzle-orm");
var pg_core_1 = require("drizzle-orm/pg-core");
exports.courses = (0, pg_core_1.pgTable)('courses', {
    id: (0, pg_core_1.serial)('id').primaryKey(),
    title: (0, pg_core_1.text)('title').notNull(),
    imageSrc: (0, pg_core_1.text)('image_src').notNull()
});
exports.userProgress = (0, pg_core_1.pgTable)('user_progress', {
    userId: (0, pg_core_1.text)('user_id').primaryKey(),
    username: (0, pg_core_1.text)('username').notNull()["default"]('User'),
    userImageSrc: (0, pg_core_1.text)('user_image_src').notNull()["default"]('/mascot.svg'),
    activeCourseId: (0, pg_core_1.integer)('active_course_id').references(function () { return exports.courses.id; }, {
        onDelete: 'cascade'
    }),
    hearts: (0, pg_core_1.integer)('hearts').notNull()["default"](5),
    points: (0, pg_core_1.integer)('points').notNull()["default"](0)
});
exports.coursesRelations = (0, drizzle_orm_1.relations)(exports.courses, function (_a) {
    var many = _a.many;
    return ({
        userProgress: many(exports.userProgress)
    });
});
exports.userProgressRelations = (0, drizzle_orm_1.relations)(exports.userProgress, function (_a) {
    var one = _a.one;
    return ({
        activeCourse: one(exports.courses, {
            fields: [exports.userProgress.activeCourseId],
            references: [exports.courses.id]
        })
    });
});
