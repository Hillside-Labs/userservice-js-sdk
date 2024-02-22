import { DefaultApi, Configuration, UsersPostRequest } from '../';

const API_BASE_PATH = "http://localhost:9001/api"

const config = new Configuration({basePath: API_BASE_PATH})
const api = new DefaultApi(config);

const req: UsersPostRequest = {
    user: { name: "Anant" }
}

async function main() {
    try {
        const createUserResponse = await api.usersPost(req);
        console.log('User created successfully:', createUserResponse);
        const getUsersResponse = await api.usersGet();
        console.log('List of users:', getUsersResponse);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();


