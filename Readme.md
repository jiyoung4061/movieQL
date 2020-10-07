# GraphQL Yoga
쉽게 설치하는데에 중점을 두고 완전한 기능을 갖춘 GraphQL server  

## install
``` bash
npm install graphql-yoga
```

### GraphQL vs REST API
REST API의 경우 내가 원하는 정보를 얻기위해서는 모든 정보를 불러온 후, 그중에서 내가 원하는 data를 골라씀 => overfetching , underfetching발생  
 *overfetching* : user의 이름만 불러오고 싶지만 user의 모든 정보를 불러온 후 이름을 추출하는 방식에 대한 문제점  
 *underfetching* : 처음 app을 실행할 때, username, userporfile, notification, likenumber등의 정보를 불러와야한다면, 총 3번의 fetching이 이뤄줘야지만 app이 실행될 수 있음.  
 GraphQL : 내가 원하는 정보에대해서 query문을 작성하면 해당 정보를 js object에 담아 반환해줌 => *overfetching, underfetching 해결 가능함*  

 ## Description
 ***graphQL_Basic*** : graphQL 기초 예제 폴더  
 **schema.graphql** : data Schema로 query에대한 설명  
 **resolvers** : query는 database에게 문제와 같은 것 => 이를 해결해주는 부분  
