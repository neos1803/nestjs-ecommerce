module.exports = (status: string, message: string, data: Array<[]>) => {
    return {
        status,
        message,
        data
    }
}