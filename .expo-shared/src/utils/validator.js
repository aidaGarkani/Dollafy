
export const validator = (expenseData) => {
    let isValid = true;
    let errorMessage = '';

    if (expenseData.title === '') {
        isValid = false;
        errorMessage = 'please fill up all the form with correct input!'
        return { isValid, errorMessage }
    } else if (expenseData.amount === 0 || Number.isNaN(expenseData.amount)) {
        isValid = false;
        errorMessage = 'please fill up all the form with correct input!'
        return { isValid, errorMessage }
    } else if (expenseData.category === '') {
        isValid = false;
        errorMessage = 'please fill up all the form with correct input!'
        return { isValid, errorMessage }
    } else {
        return { isValid, errorMessage }
    }
}