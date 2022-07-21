import React, { useState } from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import Card from '../UI/Card';
import { LineChart } from 'react-native-chart-kit';
import { totalByMonth } from '../../utils/mostSpendExpense';
import { useExpenseContext } from '../../Context/ExpensesContext';
import { SelectItem, Select, IndexPath } from '@ui-kitten/components';

const years = ["2020", "2021", "2022", "2023"];

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


const ChartList = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(2));
    const [selectedYear, setSelectedYear] = useState('2022');

    const { expenses, isLoading } = useExpenseContext();
    const year = '2022';

    const total = totalByMonth(expenses, selectedYear);
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                data: total,
                color: (opacity = 0) => `rgba(67, 151, 141, ${opacity})`,
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Monthly Transactions"] // optional
    };


    const onSelectYear = (index) => {
        setSelectedIndex(index);
        setSelectedYear(years[index.row]);
    }
    return (
        <View>
            <View style={styles.filter}>
                <Text style={styles.title}>
                    Monthly Transactions
                </Text>
                <Select
                    value={selectedYear}
                    onSelect={onSelectYear}>
                    <SelectItem value='2020' title='2020' />
                    <SelectItem value='2021' title='2021' />
                    <SelectItem value='2022' title='2022' />
                    <SelectItem value='2023' title='2023' />
                </Select>
            </View>

            {!isLoading && expenses.length > 0 && < Card>
                <View>
                    <LineChart
                        data={data}
                        width={screenWidth}
                        height={300}
                        verticalLabelRotation={0}
                        chartConfig={chartConfig}
                        bezier
                    />
                </View>
            </Card>

            }

        </View >
    )
};

export default ChartList;


const styles = StyleSheet.create({

    title: {
        alignItems: 'center',
        margin: 10,
        fontWeight: 'bold',
        flex: 1
    },
    filter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    }
});