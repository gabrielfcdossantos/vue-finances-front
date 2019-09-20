const errorHandler = (error, vm, info) => {
    console.log('Vue [error handler]: ', err, info)
    const jwtErros = ['jwt malformed', 'jwt expired', 'jwt not active', 'invalid token']
    if(jwtErros.some(jwtErros => err.message.includes(jwtErros))){
        vm.$router.push({
            path: '/login',
            query: { redicect: vm.$router.path }
        })
    }
}
const formatError = message => {
    const messageSplit = message.split(':')
    return messageSplit[messageSplit.length -1].trim()
}

export {
    errorHandler,
    formatError
}