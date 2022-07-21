const years = [
    "2020",
    "2021",
    "2022",
    "2023",
];

// ****** This function needs to be called from the chart file and be provided with the expenses and the targeted year ******* //
export const totalByYear = (expenses) => {
    let totalYearly = [];
    years.forEach((year) => {
        totalYearly.push(
            expenses
                .filter(
                    (expense) =>
                        getMonthYear(expense.date).year === year
                )
                .reduce((a, b) => a + b.amount, 0)
        );
    });
    return totalYearly;
};

const getMonthYear = (date) => {
    const splitedDate = date.split(" ");
    return { year: splitedDate[3], month: splitedDate[1] };
};