function increase(value) {
    return {
        type: 'INCREASE',
        payload: value
    }
}

export { increase }