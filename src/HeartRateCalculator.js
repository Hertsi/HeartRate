import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from './HeartRateCalculatorStyles';

function HeartRateCalculator() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateLimits = () => {
    const ageNum = parseInt(age, 10);
    if (!isNaN(ageNum) && ageNum > 0) {
      const lower = (220 - ageNum) * 0.65;
      const upper = (220 - ageNum) * 0.85;
      setLowerLimit(Math.round(lower));
      setUpperLimit(Math.round(upper));
    } else {
      setLowerLimit(null);
      setUpperLimit(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Calculator</Text>
      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
        placeholder="Enter your age"
      />
      <Button title="CALCULATE" onPress={calculateLimits} />
      {lowerLimit !== null && upperLimit !== null && (
        <View style={styles.result}>
          <Text style={styles.resultText}>Limits</Text>
          <Text style={styles.resultText}>{lowerLimit} - {upperLimit}</Text>
        </View>
      )}
    </View>
  );
}

export default HeartRateCalculator;
