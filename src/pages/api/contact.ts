import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.hsforms.com/submissions/v3/integration/submit/7526876/721f55eb-cba1-4ab9-9298-3f69dd9a02ca',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
})

class ContactApi {
  async contact(values:any) {
    const payload = {
      'fields': [
          {'name': 'email', 
           'value': values['email']},
          {'name': 'firstname', 
           'value': values['name']},
          {'name': 'company', 
           'value': values['company']},
          {'name': 'message', 
           'value': values['comments']}
      ]
    }    
    return new Promise((resolve, reject) => {      
      instance
        .post('', payload)
        .then((response:any) => {
          // console.log('response ----->', response)
          resolve(response.data)
        })
        .catch((error:any) => {
          // console.log('error ---->', error)
          reject(error)
        })
    })
  }
}

export const contactApi = new ContactApi()
