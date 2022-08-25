const formatDate = (string) => {
    const dateString = string.split('T')[0].split('-')
    
    const date = new Date(dateString[0], dateString[1], dateString[2]);  // 2009-11-10
    const longDate = date.toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric' });
    return longDate
}

export default formatDate