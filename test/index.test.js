const { KafkaRestClient } = require("../");

const krc = new KafkaRestClient({embeddedFormat: 'json'});


it('getTopics() when empty', async () =>
{
    expect.assertions(1);
    const response = await krc.getTopics();
    expect(response).toEqual([]);
});

it("produceMessages()", async () =>
{
    expect(krc.produceMessages("test", {
        records: [
            {value: JSON.stringify('Hello World')}
        ]
    })).toReturn()
});

it("produceMessages() to partition", async () =>
{
    expect(await krc.produceMessages("test", {
        records: [
            {value: JSON.stringify('Hello World')}
        ]
    }, 0)).toReturn()
});

it('getTopics() when test topic exists', async () =>
{
    expect.assertions(1);
    const response = await krc.getTopics();
    expect(response).toEqual(['test']);
});