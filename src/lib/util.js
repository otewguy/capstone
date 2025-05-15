
export function toInputDate(date) {
    return date.toISOString().split('T')[0];
}

export function fromInputDate(dateString) {
    return new Date(dateString);
}