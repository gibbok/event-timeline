export const formatDateTime = (dateTime: string) =>
    new Date(dateTime).toLocaleDateString('en-US', {
        weekday: 'short',
        year: 'numeric',
        day: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
