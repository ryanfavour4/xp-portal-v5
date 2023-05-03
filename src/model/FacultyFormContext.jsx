import { useState } from 'react'

export const emptyForm = {
  id: 0,
  name: '',
  code: '',
  uniqueId: '',
  isActive: false,
}

export const useFacultyForm = () => {
  const [formObj, setFormObj] = useState(emptyForm)

  const handleFacultyObjChange = (input) => {
    const { type, name, checked, value } = input.target

    if (type === 'checkbox') {
      setFormObj({ ...formObj, [name]: checked });
    }
    else {
      setFormObj({ ...formObj, [name]: value });
    }
}

  const populateForm = (obj) => setFormObj(obj ? obj : emptyForm)

  return { formObj, populateForm, handleFacultyObjChange }
}
