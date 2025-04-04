import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const SemiCircularProgress = ({ progress = 50, size = 250, strokeWidth = 12, color = '#32E1A0' }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius; // Perímetro total

  // 🔥 Se pinta desde 20° hasta 340° (deja 40° vacío en la parte INFERIOR)
  const visibleCircumference = (320 / 360) * circumference;
  const strokeDashoffset = visibleCircumference * (1 - progress / 100);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>

        {/* 🔵 Fondo gris del círculo */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#D3D3D3"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={visibleCircumference}
          strokeDashoffset={0} // Fondo completo sin offset
          strokeLinecap="round"
          rotation="110" // 🔥 Inicia en 20° desde la PARTE INFERIOR
          origin={`${size / 2},${size / 2}`}
        />

        {/* 🟢 Barra de progreso */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={visibleCircumference} // 🔥 Solo 320° de los 360°
          strokeDashoffset={strokeDashoffset} // Aplica progreso
          strokeLinecap="round"
          rotation="110" // 🔥 Inicia en 20° desde la PARTE INFERIOR
          origin={`${size / 2},${size / 2}`}
        />
      </Svg>

      {/* Texto dentro del círculo */}
      <View style={styles.textContainer}>
        <Text style={styles.valueText}>824</Text>
        <Text style={styles.labelText}>Great Score!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  valueText: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#314058',
  },
  labelText: {
    fontWeight: 'bold',
    color: '#32E1A0',
  },
});

export default SemiCircularProgress;
