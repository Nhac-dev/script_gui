const cmd = require("child_process"); 

module.exports = function(local) {
    if(local.includes(".js")){
        cmd.execSync(`node ${local}`);
    }else if(local.includes("py")){
        cmd.execSync(`python3 ${local}`);
    }else if(local.includes("go")){
        cmd.execSync(`go ${local}`);
    }
}