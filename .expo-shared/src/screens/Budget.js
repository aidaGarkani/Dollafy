import React, { useState } from 'react';
import Card from '../components/UI/Card';
import { View } from 'react-native';

const Budget = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');

  return (
    <View>
      <Card className='expenses'>

      </Card>
    </View>
  );
};

export default Budget;
