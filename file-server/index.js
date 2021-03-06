const Koa = require('koa');
const nodeCmd = require('node-cmd');
const bodyParser = require('koa-bodyparser');
const app = new Koa();
const {port, exePath} = require('./env.js');
app.use(bodyParser());
app.use(async (ctx, next) => {
    await next();
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if(ctx.request.method === 'OPTIONS'){
        ctx.body = 'OPTIONS';
    }
});

app.use(async ctx => {
    let {filePath} = ctx.request.body;
    if(filePath){
        filePath = decodeURIComponent(filePath);
        console.log('open file exe', exePath);
        console.log('open file', filePath);
        nodeCmd.run(
            `"${exePath}" ${filePath}`,
            function(err, data, stderr){
                console.log(err)
            }
        );
    }
    ctx.body = 'success';
});
app.listen(port);