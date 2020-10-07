import {people, getById} from './db'

const resolvers = {
    Query: {
        people: () => people,
        // person: () => jiyoung // name이라는 query가 요청으로 들어오면 콜백함수(jiyoung이라는 string)을 실행
        person: (_, {id}) => getById(id)
    }
}

export default resolvers;