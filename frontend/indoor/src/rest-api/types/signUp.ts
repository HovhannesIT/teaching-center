export interface SignUpRequestI {
  "firstName": string,
  "lastName": string,
  "username": string,
  "email": string,
  "password": string,
  "type": string,
  "professionId": number,
  "phoneNumber": string,
  "primaryCommunicationType": string,
  "birthDate": string,
  "avatar"?: string
}