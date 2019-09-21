import { KafkaRestClient } from "../";

async function main()
{
    const krc: KafkaRestClient = new KafkaRestClient({embeddedFormat: 'json'});

    console.log("Test getTopics()");
    await krc.getTopics().then((res) => {
        console.log(JSON.stringify(res) === JSON.stringify([]));
    }).catch((err: any) => {
        console.error("false: " + err.error.message)
    });

    console.log("Test produceMessages()");
    await krc.produceMessages("test", {
        records: [
            {value: JSON.stringify('Hello World')}
        ]
    }).then(() => {
        console.log(1==1)
    }).catch((err: any) => {
        console.error("false: " + err.error.message);
        // console.error(err);
    });

    console.log("Test produceMessages() with Partition ID");
    await krc.produceMessages("test", {
        records: [
            {value: JSON.stringify('Hello World')}
        ]
    }, 0).then(() => {
        console.log(1==1)
    }).catch((err: any) => {
        console.error("false: " + err.error.message);
        // console.error(err);
    });

    console.log("Test getTopics()");
    await krc.getTopics().then((res) => {
        console.log(JSON.stringify(res) === JSON.stringify(["test"]));
    }).catch((err: any) => {
        console.error("false: " + err.error.message)
    });

    console.log("Test getBrokers()");
    await krc.getBrokers().then((res) => {
        console.log(JSON.stringify(res) === JSON.stringify([0]));
    }).catch((err: any) => {
        console.error("false: " + err.error.message)
    });
}

main();