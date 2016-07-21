declare module "pg-query-stream" {
    interface QueryStreamOptions {
        highWaterMark: number;
        batchSzie: number;
    }

    class QueryStream {
        constructor (text: string, values?: any[], options?: QueryStreamOptions);
    }
    namespace QueryStream {}
    export = QueryStream
}

