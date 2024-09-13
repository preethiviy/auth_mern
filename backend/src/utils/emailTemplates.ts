export const getPasswordResetTemplate = (url: string) => ({
    subject: "Password Reset Request",
    text: `You requested a password reset. Click on the link to reset your password ${url}`,
    html: ``
})

export const getVerifyEmailTemplate = (url: string) => ({
    subject: "Verify Email Address",
    text: `Click on the link to verify your email address ${url}`,
    html: ``
})