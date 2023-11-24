let pointure= prompt ("entrez ta pointure :");
let AnnéeDeNaissance= prompt ("ton année de naissance:") 

function resultat1 (point,Année){
return ((((point*2)+5)*50)-Année)+1766;
}
console.log(resultat1(pointure,AnnéeDeNaissance));
