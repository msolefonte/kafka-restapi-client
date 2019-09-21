export type ApiVersion = "v1" | "v2";

export interface AuthenticationCredentials {
    username: string;
    password: string;
}

export interface ConsumerConfig {

}

export type EmbeddedFormat = "avro" | "binary" | "json";

export interface KafkaRestClientConfig {
    apiVersion?: ApiVersion;
    auth?: AuthenticationCredentials;
    embeddedFormat?: EmbeddedFormat;
    serializationFormat?: SerializationFormat;
    url?: string;
}

export interface Partition {
    partition: number;
    leader: number;
    replicas: Replica[]
}

export interface PartitionMetadata {

}

export interface ProduceRequest {
    records: Record[];
    key_schema?: string;
    key_schema_id?: number;
    value_schema?: string;
    value_schema_id?: number;
}

export interface Record {
    value: any;
    key?: any;
    partition?: any;
}

export interface Replica {
    broker: number;
    leader: boolean;
    in_sync: boolean;
}

export type SerializationFormat = "json";

export interface TopicMetadata {

}