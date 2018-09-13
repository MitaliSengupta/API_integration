import { FetchData, TnoAuthContext, TFetchDataCallback } from '@bearer/intents'
// Uncomment this line if you need to use Client
import Client from './client'



export default class ListCharactersIntent {
  static intentName: string = 'listCharacters'
  static intentType: any = FetchData

  
  static action(context: TnoAuthContext, params: any, body: any, callback: TFetchDataCallback) {
    Client().get('character/1')
	.then(({ data }) => {
    		 callback({ data })
	      })
	.catch(error => {
		 callback({ error: error.toString() })
	})
   }
}

