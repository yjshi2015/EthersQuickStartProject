import {Block, ethers} from "ethers";

async function main() {
    //provider为区块链的一个"只读“链接，类似于数据库的只读连接
    const provider = new ethers.WebSocketProvider("wss://sepolia.infura.io/ws/v3/ab6f690a7abd4c6d836a0454d5112a50");
    /**
    //监听当前已发生但还没哟写入区块的交易
    provider.on("pending", async(tx) => {
        //获取交易哈希ID
        console.log(tx);
        //获取交易详情
        const txDetail = await provider.getTransaction(tx);
        console.log(txDetail);
    }); 
     */

    provider.on("block", async(block) => {
        //获取区块编号
        console.log(block);
        //获取区块头信息
        const blockInfo = await provider.getBlock(block);
        console.log(blockInfo);
        //获取区块交易信息,API已废弃
        // const blockWithTransaction = await provider.getBlockWithTransactions(block);
        // console.log(blockWithTransaction);
    });
}

main();