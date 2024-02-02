export interface TypeInfoUser {
  id: number;
  register: boolean;
  name: string;
  logo: string;
  subscription: string;
  dataReg: string;
  FullName: string;
  Email: string;
  PhoneNumber: number;
  Password: string;
  confirmPassword: string;
  access: string;
}
// Массив данных о пользователе
export const InfoUser: TypeInfoUser = {
  id: 1,
  register: false,
  name: "Dima Yakovlev",
  logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOg_nrQRIM9IOzKmJb2XxBxMUQIHoh6sIdCA&usqp=CAU",
  subscription: "student",
  dataReg: "01.04.2023",
  FullName: "Dima",
  Email: "Dimapro9500@mail.ru",
  PhoneNumber: 89649138644,
  Password: "Pamix4535",
  confirmPassword: "",
  access: "teacher",
};
