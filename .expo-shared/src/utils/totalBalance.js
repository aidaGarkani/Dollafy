export const totalBalance = (expenses) => {
    let totalIncome = 0;
    let totalExpense = 0;
    expenses.forEach(element => {
        if (element.category === 'income') {
            totalIncome += element.amount
        } else {
            totalExpense += element.amount
        }
    });
    return totalIncome - totalExpense
}