import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerItem: {
    height: 100,
    marginTop: 15,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
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
    backgroundColor: '#fff',
  },
  dropdownTextStyles: {
    fontSize: 12,
  },
  dropdownInputStyles: {
    fontSize: 12,
  },
  dropdownBoxStyles: {
    borderColor: '#fff',
    borderRadius: 25,
    height: 40,
    backgroundColor: '#fff',
    marginTop: 10,
    paddingHorizontal: 15,
  },
  dropdownStyles: {
    borderColor: '#E2E6EB',
    backgroundColor: '#fff',
  },
  containerBadge: {
    backgroundColor: '#B3E2FF', // Color de fondo
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20, // Hace que el badge sea redondeado
    alignSelf: 'flex-start',
  },
  bagde: {
    // color: '#fff', // Texto en blanco
    fontSize: 11,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#4c4c4c',
    marginVertical: 5,
  },
});
