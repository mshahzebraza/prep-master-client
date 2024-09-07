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
            TEACHER_DASHBOARD: '/app/teacher/dashboard/',
        },
        STUDENT: {
            ROOT: '/app/student/',
            FOLDER: '/app/student/*',
            STUDENT_DASHBOARD: '/app/student/dashboard/',
        },
    },
}