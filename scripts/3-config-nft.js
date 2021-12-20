import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0x9e924975BA87713A5B18a79359F64A06AfE8F469",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Vision",
                description: "This NFT will give you access to Play2EarnDAO!",
                image: readFileSync("scripts/assets/vision.jpg"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()