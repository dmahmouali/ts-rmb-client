
import { MessageBusClient } from "../src/client"

async function main() {
    const dstNodeId = 4;

    async function deploy() {

        let rmb = new MessageBusClient();
        let msg = rmb.prepare("zos.statistics.get", [dstNodeId], 0, 2);
        console.log(msg)
        const retMsg = await rmb.send(msg, "{'test':'test'}")
        console.log(retMsg)

        const result = await rmb.read(retMsg);
        console.log(`the read response is: ${JSON.stringify(result)}`);
        return
    }

    deploy()
}

main()
