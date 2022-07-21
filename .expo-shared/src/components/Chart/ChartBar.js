import React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import Card from '../UI/Card';
import { LineChart } from 'react-native-chart-kit';
import { totalByMonth } from '../../utils/mostSpendExpense';
import { useExpenseContext } from '../../Context/ExpensesContext';
import { totalByYear } from '../../utils/mostSpendByYear';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "FFFFF",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => "#a5a5a5",
    strokeWidth: 2, // optional, default 3
    labelColor: (opacity = 1) => "#a5a5a5"
};


const ChartBar = () => {
    const { expenses, isLoading } = useExpenseContext();
    const year = '2022';
    const total = totalByYear(expenses);
    const data = {
        labels: ["2020", "2021", "2022", "2023"],
        datasets: [
            {
                data: total,
                color: (opacity = 0) => `rgba(67, 151, 141, ${opacity})`,
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Yearly Transactions"] // optional
    };
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Yearly Transactions
            </Text>
            {!isLoading && expenses.length > 0 && < Card>
                <View>
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={300}
                        verticalLabelRotation={0}
                        chartConfig={chartConfig}
                    />
                </View>
            </Card>

            }

        </View >
    )
};

export default ChartBar;


const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        margin: 10,
        fontWeight: 'bold'
    },
    container: {
        marginTop: 20
    }
});