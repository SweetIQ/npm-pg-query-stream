declare module "pg-query-stream" {
    class QueryStream {
        constructor (text: string, values?: Object, options?: Object);
    }
    namespace QueryStream {}
    export = QueryStream
}

