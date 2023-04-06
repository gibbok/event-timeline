export const formatDateTime = (dateTime: string) => {
    const datePart = new Date(dateTime).toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit'
    })
    const timePart = new Date(dateTime).toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
    return `${timePart} - ${datePart}`
}


export const isBrowser = () => typeof window !== `undefined`