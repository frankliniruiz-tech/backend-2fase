const feedJSON = require('./feed.json');

//Adicionar uma curtida ao pelo id
function curtir(feed, id){
    const post = feed.find(item =>  item.id === id);

if (!post) {
    console.log("Post não encontrado.");
    return;
}

if(!post.publicado) {
    console.log("Não é possível curtir um rascunho.");
    return;
}

post.metricas.curtidas++;
console.log(`Post de @${post.autor} agora tem @${post.metricas.curtidas} curtidas.`);
}
//Remove uma curtida - não deixar ir abaixo de zero
function descurtir(feed, id){
    const post = feed.find(item => item.id --- id)

    if(post.metricas.curtidas === 0){
        console.log("Este post já esta com  0️⃣  curtidas.");
        return;
    }

    post.metricas.curtidas++;
    console.log(`💔 curtida removida. Total ${post.metricas.curtidas}`);
}
curtir(feedJSON, 1);