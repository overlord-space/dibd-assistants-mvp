import {assistantId} from "@/app/assistant-config";
import {openai} from "@/app/openai";
import {bots, BotVariant} from "@/app/bots";

// upload file to assistant's vector store
export async function POST(request) {
    const formData = await request.formData(); // process file as FormData
    return new Response();

    /*const file = formData.get("file"); // retrieve the single file from FormData
    const vectorStoreId = await getOrCreateVectorStore(); // get or create vector store

    // upload using the file stream
    const openaiFile = await openai.files.create({
        file: file,
        purpose: "assistants",
    });

    // add file to vector store
    await openai.beta.vectorStores.files.create(vectorStoreId, {
        file_id: openaiFile.id,
    });
    return new Response();*/
}

// list files in assistant's vector store
export async function GET(request) {
    const url = new URL(request.url)
    const urlParams = new URLSearchParams(url.search);
    const assistantId = urlParams.get('assistantId');
    if (!assistantId) {
        return new Response("assistantId is required", {status: 400});
    }

    const bot = bots.find((bot) => bot.localId === assistantId);
    if (!bot) {
        return new Response("Assistant not found", {status: 404});
    }

    const vectorStoreId = await getOrCreateVectorStore(bot); // get or create vector store
    const fileList = await openai.beta.vectorStores.files.list(vectorStoreId);

    const filesArray = await Promise.all(
        fileList.data.map(async (file) => {
            const fileDetails = await openai.files.retrieve(file.id);
            const vectorFileDetails = await openai.beta.vectorStores.files.retrieve(
                vectorStoreId,
                file.id
            );
            return {
                file_id: file.id,
                filename: fileDetails.filename,
                status: vectorFileDetails.status,
            };
        })
    );
    return Response.json(filesArray);
}

// delete file from assistant's vector store
export async function DELETE(request) {
    const body = await request.json();
    const fileId = body.fileId;

    return new Response();
    // const vectorStoreId = await getOrCreateVectorStore(); // get or create vector store
    // await openai.beta.vectorStores.files.del(vectorStoreId, fileId); // delete file from vector store

}

/* Helper functions */

const getOrCreateVectorStore = async (bot: BotVariant) => {
    const assistant = await openai.beta.assistants.retrieve(bot.assistantId);

    // if the assistant already has a vector store, return it
    if (assistant.tool_resources?.file_search?.vector_store_ids?.length > 0) {
        return assistant.tool_resources.file_search.vector_store_ids[0];
    }
    // otherwise, create a new vector store and attach it to the assistant
    const vectorStore = await openai.beta.vectorStores.create({
        name: "sample-assistant-vector-store",
    });
    await openai.beta.assistants.update(bot.assistantId, {
        tool_resources: {
            file_search: {
                vector_store_ids: [vectorStore.id],
            },
        },
    });
    return vectorStore.id;
};
