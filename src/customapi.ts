import { DefaultApi, Configuration, CreateUserRequest, CreateAttributesRequest } from '../'

const API_BASE_PATH = 'http://localhost:9001/api'

const config = new Configuration({basePath: API_BASE_PATH})
const api = new DefaultApi(config)

async function main() {
    try {
        // Create a new user
        const req: CreateUserRequest = {
            user: { username: 'Durga' }
        }
        const createUserResponse = await api.createUser(req)
        console.log('User created successfully:', createUserResponse)
        
        // Get all users
        const getUsersResponse = await api.getAllUsers()
        console.log('List of users:', getUsersResponse)
        
        const uid: number = getUsersResponse[0].iD || 0
        
        // Update a user by ID
        await api.updateUser({ id: uid, user: { username: 'Anant' } });
        
        // Get a user by ID
        const getUserResponse = await api.getUser({ id: uid });
        console.log('User details:', getUserResponse);
        
        // Post user attributes
        const req2 : CreateAttributesRequest = {
            id: uid,
            requestBody: {
                'role': 'God',
                'access': {
                    'something': 'else'
                }
            }
        }
        
        // Create user attributes
        await api.createAttributes(req2)
        
        // Get user attributes
        const attr = await api.getAttributes({id:1})
        console.log(attr)
        
        // Get a user attribute by name
        const userAttribute = await api.getAttributeByName({ id: uid, name: 'role' });
        console.log('User attribute:', userAttribute);
        
        // Update a user attribute by name
        await api.updateAttributeByName({ id: uid, name: 'role', requestBody: { role: 'manager' }});
        
        // Post user events
        await api.createEvent({
            id: uid,
            event: {
                specversion: '1.0',
                type: 'event.type',
                id: '123',
                time: new Date(),
                source: 'http://example.com',
                datacontenttype: 'application/json',
                dataschema: 'http://example.com/schema',
                subject: 'event.subject',
                data: {
                    'key': 'value'
                }
            }
        });
        
        // Post user traits
        await api.createTraits({ id: uid, requestBody: { hobby: 'reading' } });
        
        // Get user traits by ID
        const userTraits = await api.getAllTraits({ id: uid });
        console.log('User traits:', userTraits);
        
        // Get a user trait by name
        const userTrait = await api.getTraitByName({ id: uid, name: 'hobby' });
        console.log('User trait:', userTrait);
        
        // Update a user trait by name
        await api.updateTraitByName({ id: uid, name: 'hobby', requestBody: { 'hobby': 'chess' } });
        
        // Delete a user attribute by name
        await api.deleteAttributeByName({ id: uid, name: 'role' });
        
        // Delete a user trait by name
        await api.deleteTraitByName({ id: uid, name: 'hobby' });
        
        // Delete a user by ID
        const deleteUserResponse = await api.deleteUser({ id: uid });
        console.log('User deleted:', deleteUserResponse);
    } catch (error) {
        console.error('Error:', error)
    }
}

main()
