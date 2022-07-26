export const categoryChart = (category, expenses) => {
    const filteredCategory = expenses.filter(expense => expense.category === category);
    const totalCategoryAmount = filteredCategory.reduce((a, b) => a + b['amount'], 0);

    const data = {
        food: {
            color: "#D46C4E",
            legendFontSize: 12
        },
        personal: {
            color: "#264D59",
            legendFontSize: 12
        },
        grocery: {
            color: "#F9AD6A",
            legendFontSize: 12
        },
        transportation: {
            color: "#F9E07F",
            legendFontSize: 12
        },
        income: {
            color: "#43978D",
            legendFontSize: 12
        }
    }

    return {
        name: category,
        total: totalCategoryAmount,
        ...data[category]
    }
}

export const categoriesData = (expenses) => {
    return [
        categoryChart('food', expenses),
        categoryChart('income', expenses),
        categoryChart('transportation', expenses),
        categoryChart('grocery', expenses),
        categoryChart('personal', expenses),
        categoryChart('recurring', expenses),
    ];
};
