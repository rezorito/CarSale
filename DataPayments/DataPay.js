import AsyncStorage from '@react-native-async-storage/async-storage';
import { xe_ford, xe_hyundai, xe_kia, xe_mazda, xe_toyota } from '../Xe/xe';

// Hàm để lưu trữ thông tin của xe vào AsyncStorage bằng id
const storeCarById = async (carId, carType) => {
  // console.log('Car ID:', carId);
  // console.log('Car Data:', carType);
  try {
    let carArray = carType;
    const selectedCar = carArray.find(car => car.id === carId);

    if (selectedCar) {
      // Lưu trữ thông tin xe vào AsyncStorage
      await AsyncStorage.setItem(`car_${carId}`, JSON.stringify(selectedCar));
      console.log('Car data stored successfully!');
    } else {
      console.log('Car not found');
    }
  } catch (error) {
    console.error('Error storing car data:', error);
  }
};

const getAllDataFromStorage = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const items = await AsyncStorage.multiGet(keys);
    // Mỗi item trong items sẽ là một cặp key-value, chúng ta chỉ quan tâm đến giá trị (value)
    const parsedItems = items.map(([key, value]) => JSON.parse(value));

    return parsedItems;
  } catch (error) {
    console.error('Error reading data from AsyncStorage:', error);
    return [];
  }
};

const deleteCarById = async (carId) => {
  try {
    // Xóa dữ liệu xe từ AsyncStorage bằng cách sử dụng key tương ứng với carId
    await AsyncStorage.removeItem(`car_${carId}`);
    console.log('Car data deleted successfully!');
  } catch (error) {
    console.error('Error deleting car data:', error);
  }
};

const removeAllDataFromStorage = async () => {
  try {
    // Lấy tất cả các keys từ AsyncStorage
    const keys = await AsyncStorage.getAllKeys();

    // Xóa dữ liệu từ AsyncStorage dựa trên danh sách keys
    await AsyncStorage.multiRemove(keys);

    console.log('All data removed from AsyncStorage.');
  } catch (error) {
    console.error('Error removing data from AsyncStorage:', error);
  }
};


export {
  storeCarById,
  getAllDataFromStorage,
  deleteCarById,
  removeAllDataFromStorage
}