import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    height: 90,
    marginTop: 15,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  inputStyle: {
    borderWidth: 0.2,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});
