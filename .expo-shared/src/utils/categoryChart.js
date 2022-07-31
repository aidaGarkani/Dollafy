export const categoryChart = (category, expenses) => {
    const filteredCategory = expenses.filter(expense => expense.category === category);
    const totalCategoryAmount = filteredCategory.reduce((a, b) => a + b['amount'], 0);

    const data = {
        food: {
            color: "#D46C4E",
            legendFontSize: 12,
            legendFontColor: '#7F7F7F'
        },
        personal: {
            color: "#264D59",
            legendFontSize: 12,
            legendFontColor: '#7F7F7F'
        },
        grocery: {
            color: "#F9AD6A",
            legendFontSize: 12,
            legendFontColor: '#7F7F7F'
        },
        transportation: {
            color: "#F9E07F",
            legendFontSize: 12,
            legendFontColor: '#7F7F7F'
        },
        income: {
            color: "#43978D",
            legendFontSize: 12,
            legendFontColor: '#7F7F7F'
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
    ];
};
