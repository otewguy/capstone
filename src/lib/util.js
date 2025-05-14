export function getUOM(itemId) {
    const item = data.items.find(item => item.id == itemId);
    return item?.uom ?? ""; 
}

export function toInputDate(date) {
    return date.toISOString().split('T')[0];
}

export function fromInputDate(dateString) {
    return new Date(dateString);
}