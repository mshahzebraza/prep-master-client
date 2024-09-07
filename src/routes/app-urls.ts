export const APP_URLS = {
    // ? Public
    ROOT: '/',
    FOLDER: '/*',
    CATCH_ALL: '*',

    HOME: {
        ROOT: '/',
        FOLDER: '/*',
    },
    // ? Auth
    AUTH: {
        ROOT: '/auth/',
        FOLDER: '/auth/*',
        LOGIN: '/auth/login/',
        SIGNUP: '/auth/signup/',
        FORGET_PASSWORD: '/auth/forget-password/',
        RESET_PASSWORD: '/auth/reset-password/',
    },
    // ? App
    APP: {
        SIGNOUT: '/app/signout/',
        ROOT: '/app/',
        FOLDER: '/app/*',

        ADMIN: {
            ROOT: '/app/admin/',
            FOLDER: '/app/admin/*',
            ADMIN_DASHBOARD: '/app/admin/dashboard/',
        },
        TEACHER: {
            ROOT: '/app/teacher/',
            FOLDER: '/app/teacher/*',
            CREATE_TEST: '/app/teacher/tests/new',
            EDIT_TEST: '/app/teacher/tests/:testId/edit',
            TEACHER_DASHBOARD: '/app/teacher/dashboard/',
        },
        STUDENT: {
            ROOT: '/app/student/',
            FOLDER: '/app/student/*',
            STUDENT_DASHBOARD: '/app/student/dashboard/',
            STUDENT_TEST_SERIES: `/app/student/test-series`,
            STUDENT_TEST_SERIES_SINGLE: (testSeriesId: string) => `/app/student/test-series/${testSeriesId}/`,
        },
    },
}