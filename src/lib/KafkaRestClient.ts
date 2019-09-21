'use strict';

const request = require('request-promise-native');

import {
    ApiVersion,
    AuthenticationCredentials,
    EmbeddedFormat,
    ConsumerConfig,
    KafkaRestClientConfig,
    Partition,
    PartitionMetadata,
    ProduceRequest,
    SerializationFormat,
    TopicMetadata
} from '../../types/'

import {
    KafkaRestConsumer
} from "./KafkaRestConsumer";


export class KafkaRestClient
{
    private readonly apiVersion: ApiVersion;
    private readonly auth: AuthenticationCredentials;
    private readonly acceptHeader: string;
    private readonly contentTypeHeader: string;
    private readonly embeddedFormat: EmbeddedFormat;
    private readonly serializationFormat: SerializationFormat;
    private readonly url: string;

    constructor(config: KafkaRestClientConfig = {})
    {
        this.apiVersion = config.apiVersion || "v2";
        this.auth = config.auth;
        this.embeddedFormat = config.embeddedFormat || "binary";
        this.serializationFormat = config.serializationFormat || "json";
        this.url = config.url || "http://localhost:8082";

        this.acceptHeader = "application/vnd.kafka." + this.apiVersion + "+" + this.serializationFormat;
        this.contentTypeHeader = "application/vnd.kafka." + this.embeddedFormat + "." + this.apiVersion +
            "+" + this.serializationFormat;
    }

    // Get a list of Kafka topics.
    async getTopics(): Promise<string[]>
    {
        const requestOptions: any = {
            uri: this.url + '/topics',
            headers: {
                'Accept': this.acceptHeader
            },
            json: this.serializationFormat === "json"
        };

        if (this.auth) {
            requestOptions.auth = this.auth;
        }

        return request(requestOptions);
    }

    // // Get metadata about a specific topic.
    // async getTopicMetadata(topicName: string): Promise<TopicMetadata>
    // {
    //     return {}
    // }

    // Produce messages to a topic, optionally specifying keys or partitions for the messages.
    async produceMessages(topicName: string, produceRequest: ProduceRequest,
                          partitionId: number = undefined): Promise<void>
    {
        let uri = this.url + '/topics/' + topicName;
        if(partitionId) {
            uri += 'partitions/' + partitionId
        }

        const requestOptions: any = {
            uri: uri,
            method: 'post',
            headers: {
                'Accept': this.acceptHeader,
                'Content-Type': this.contentTypeHeader
            },
            body: produceRequest,
            json: this.serializationFormat === "json"
        };

        if (this.auth) {
            requestOptions.auth = this.auth;
        }

        return request(requestOptions);
    }

    // // Get a list of partitions for the topic.
    // async getPartitions(): Promise<Partition[]>
    // {
    //     return
    // }
    //
    // // Get metadata about a single partition in the topic.
    // async getPartitionMetadata(topicName: string, partitionId: number): Promise<PartitionMetadata>
    // {
    //     return
    // }
    //
    // // produceMessagesToPartition
    //
    // // Create a new consumer instance in the consumer group.
    // async createConsumer(groupName: string, consumerConfig: ConsumerConfig,
    //                      idempotent: boolean = false): Promise<KafkaRestConsumer>
    // {
    //     return
    // }
    //
    // // Destroy the consumer instance.
    // async deleteConsumer(groupName: string, instanceId: string,
    //                      idempotent: boolean = false): Promise<void>
    // {
    //
    // }

    async getBrokers(): Promise<number[]>
    {
        const requestOptions: any = {
            uri: this.url + '/brokers',
            headers: {
                'Accept': this.acceptHeader
            },
            json: this.serializationFormat === "json"
        };

        if (this.auth) {
            requestOptions.auth = this.auth;
        }

        return request(requestOptions)
            .then((response: any) => {
                return response.brokers
            })
    }
}