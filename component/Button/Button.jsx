import {TouchableOpacity,StyleSheet,Text} from 'react-native'
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );
  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#F2A9BE",
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:160
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
  export default AppButton