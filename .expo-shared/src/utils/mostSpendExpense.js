const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

// ****** This function needs to be called from the chart file and be provided with the expenses and the targeted year ******* //
export const totalByMonth = (expenses, year) => {
    let totalMonthly = [];
    months.forEach((month) => {
        totalMonthly.push(
            expenses
                .filter(
                    (expense) =>
                        getMonthYear(expense.date).month === month &&
                        getMonthYear(expense.date).year === year
                )
                .reduce((a, b) => a + b.amount, 0)
        );
    });
    return totalMonthly;
};

const getMonthYear = (date) => {
    const splitedDate = date.split(" ");
    return { year: splitedDate[3], month: splitedDate[1] };
};