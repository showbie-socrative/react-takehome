import { IFormConfig } from 'models';

export const TheFormConfig: IFormConfig = Object.freeze({
  action: 'the actual url',
  fields: [
    {
      id: "roomId",
      label: "room ID"
    },
    {
      id: "studentId",
      label: "student id",
    },
    {
      id: "name",
      label: "Student Name"
    }
  ]
})
