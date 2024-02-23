import { DefaultApi, Configuration, UsersPostRequest, UsersIdAttributesGetRequest, UsersIdAttributesPostRequest } from '../'

const API_BASE_PATH = "http://localhost:9001/api"

const config = new Configuration({basePath: API_BASE_PATH})
const api = new DefaultApi(config)

async function main() {
    try {
        const req: UsersPostRequest = {
            user: { username: "Anant" }
        }
        const createUserResponse = await api.usersPost(req)
        console.log('User created successfully:', createUserResponse)
        const getUsersResponse = await api.usersGet()
        console.log('List of users:', getUsersResponse)
        
        const req2 :UsersIdAttributesPostRequest = {
            id: 1,
            requestBody: {
                "role": "carpenter",
                "access": {
                    "something": "else"
                }
            }
        }
        await api.usersIdAttributesPost(req2)
        const attr = await api.usersIdAttributesGet({id:1})
        console.log(attr)
    } catch (error) {
        console.error('Error:', error)
    }
}

main()
